﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NES.CPU.nitenedo.Interaction;

namespace NES.CPU.PPUClasses
{
    public partial class HardWhizzler
    {
        int sprite0scanline = -1;
        int sprite0x = -1;


        private int lastcpuClock;

        public int LastcpuClock
        {
            get { return lastcpuClock; }
            set { lastcpuClock = value; }
        }
        /// <summary>
        /// draws from the lastcpuClock to the current one
        /// </summary>
        /// <param name="cpuClockNum"></param>
        public void DrawTo(int cpuClockNum)
        {
            int frClock = (cpuClockNum - lastcpuClock )* 3;
            
            //// if we are in vblank 
            if (frameClock < 6820)
            {
                // if the frameclock +frClock is in vblank (< 6820) dont do nothing, just update it
                if (frameClock + frClock < 6820)
                {
                    frameClock += frClock;
                    frClock = 0;
                }
                else
                {
                    frClock += frameClock - 6820;
                    frameClock = 6820;
                }
            }
            for (int i = 0; i < frClock; ++i)
            {
                BumpScanline();
            }
            lastcpuClock = cpuClockNum;
        }

        private void BumpScanline()
        {
            switch (frameClock++)
            {
                case 0:
                    //frameFinished();
                    break;
                case 6820:
                    chrRomHandler.ResetBankStartCache();
                    frameOn = true;
                    //
                    currentPalette = 0;
                    Buffer.BlockCopy(_palette, 0, palCache[currentPalette], 0, 32);
                    // setFrameOn();
                    if (spriteChanges)
                    {
                        UnpackSprites();
                        spriteChanges = false;
                    }

                    ClearVINT();
                    UpdatePixelInfo();
                    break;
                //304 pixels into pre-render scanline
                case 7125:
                    break;

                case 7161:
                    vbufLocation = 0;
                    currentXPosition = 0;
                    currentYPosition = 0;

                    break;

                case frameClockEnd:
                    frameFinished();
                    SetupVINT();
                    frameOn = false;
                    frameClock = 0;
                    break;
            }



            if (frameClock >= 7161 && frameClock <= 89342)
            {


                if (currentXPosition < 256 && vbufLocation < 256 * 240)
                {
                    if (chrRomHandler.BankSwitchesChanged)
                    {
                        chrRomHandler.UpdateBankStartCache();
                        UpdatePixelInfo();
                    }
                    DrawPixel();

                    vbufLocation++;
                }

                currentXPosition++;

                if (currentXPosition > 340)
                {
                    chrRomHandler.UpdateScanlineCounter();
                    currentXPosition = 0;
                    currentYPosition++;

                    PreloadSprites(currentYPosition);

                    lockedHScroll = _hScroll;
                    UpdatePixelInfo();
                }

            }


        }

        private int[] rgb32OutBuffer = new int[256*256];

        private int[] outBuffer = new int[256 * 256];

        public int[] OutBuffer
        {
            get { return outBuffer; }
        }

        private int[] pixelEffectBuffer = new int[256 * 256];

        public int[] PixelEffectBuffer
        {
            get { return pixelEffectBuffer; }
            set { pixelEffectBuffer = value; }
        }


        public int[] VideoBuffer
        {
            get
            {
                return rgb32OutBuffer;
            }
        }

        public void SetVideoBuffer(int[] inBuffer)
        {
            rgb32OutBuffer = inBuffer;
        }

        bool frameEnded = false;

        /// <summary>
        /// Checks if NMI needs to be reasserted during vblank
        /// </summary>
        public void CheckVBlank()
        {
            if (!NMIHasBeenThrownThisFrame && !frameOn && NMIIsThrown && NMIOccurred )
            {
                nmiHandler();
                HandleVBlankIRQ = true;
                NMIHasBeenThrownThisFrame = true;
            }
        }

        int vbufLocation;

        private int pixelWidth = 32;

        public int PixelWidth
        {
            get { return pixelWidth; }
            set { pixelWidth = value; }
        }

        bool fillRGB = false;

        public bool FillRGB
        {
            get { return fillRGB; }
            set { fillRGB = value; }
        }

        int currentPixelInfo0 = 0;
        int currentPixelInfo1 = 0;

        private void DrawPixel()
        {
            if (!hitSprite && sprite0scanline == currentYPosition)
            {
                if (SpriteZeroTest() && TestNTPixel())
                {
                    hitSprite = true;
                    _PPUStatus = _PPUStatus | 0x40;
                }
            }
            outBuffer[vbufLocation] = currentPixelInfo0;
            rgb32OutBuffer[vbufLocation] = currentPixelInfo1;
            
        }

        int nameTableBits = 0;

        void UpdatePixelInfo()
        {

            //int vScroll = (lockedVScroll < 0) ? lockedVScroll + 240 : lockedVScroll;
            int ntbits = nameTableBits;

            if (lockedVScroll <0 )
            {
                ntbits |= 4;
            }

            currentPixelInfo0 = (
                currentPalette << 24 | // a
                _PPUControlByte1 << 16 | // r
                _PPUControlByte0 << 8  | // g
                ntbits
                // b
                );


            
            currentPixelInfo1 =
                (
                    lockedVScroll << 24 | // a
                    lockedHScroll << 16 |  // r
                    (int)(chrRomHandler.CurrentBank & 0xFFFF)
                );
        }


        //private void DrawClipPixel()
        //{
        //    int tilePixel = 0;


        //    // if we're clipping the left 8 pixels, or bg is not visible, set color to background byte
        //    if (_tilesAreVisible && !_clipTiles)
        //    {
        //        tilePixel = GetNameTablePixel();
        //    }
        //    isForegroundPixel = false;
        //    int spritePixel = _spritesAreVisible && !_clipSprites ? GetSpritePixel() : 0;


        //    //&& (newbyte & 3) != 0
        //    if (!hitSprite && spriteZeroHit)
        //    {
        //        hitSprite = true;
        //        _PPUStatus = _PPUStatus | 0x40;
        //    }

        //    outBuffer[vbufLocation] = (uint)(
        //        currentPalette << 24 |
        //        ((spritePixel != 0 && (tilePixel == 0 || isForegroundPixel)) ? 255 : 0) << 16 |
        //        spritePixel << 8 |
        //        tilePixel);

        //    //outBuffer[vbufLocation] =
        //    //    (spritePixel != 0 && (tilePixel == 0 || isForegroundPixel))
        //    //    ? _palette[spritePixel] : _palette[tilePixel];
        //}


        private bool _clipTiles;
        private bool _clipSprites;

        private bool ClippingTilePixels()
        {
            return _clipTiles ;
        }

        private bool ClippingSpritePixels()
        {
            return _clipSprites ;
        }
    }
}