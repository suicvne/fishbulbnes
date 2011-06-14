﻿window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (/* function */callback, /* DOMElement */element) {
                  window.setTimeout(callback, 1000 / 60);
              };
})();

var palette = new Uint8Array([121, 123, 121, 255,
            12, 38, 162, 255,
            40, 16, 174, 255,
            94, 11, 161, 255,
            137, 1, 118, 255,
            147, 5, 42, 255,
            146, 16, 11, 255,
            111, 38, 4, 255,
            71, 65, 4, 255,
            20, 87, 4, 255,
            7, 94, 11, 255,
            2, 83, 46, 255,
            5, 71, 109, 255,
            0, 0, 0, 255,
            2, 2, 2, 255,
            2, 2, 2, 255,
            191, 192, 191, 255,
            22, 105, 223, 255,
            75, 65, 238, 255,
            142, 39, 226, 255,
            196, 25, 186, 255,
            212, 32, 99, 255,
            212, 55, 33, 255,
            181, 90, 13, 255,
            138, 122, 4, 255,
            58, 146, 7, 255,
            20, 154, 24, 255,
            9, 153, 90, 255,
            9, 139, 169, 255,
            45, 47, 45, 255,
            3, 3, 3, 255,
            3, 3, 3, 255,
            245, 246, 248, 255,
            73, 178, 248, 255,
            137, 148, 253, 255,
            194, 121, 250, 255,
            234, 111, 237, 255,
            244, 117, 186, 255,
            247, 131, 108, 255,
            238, 162, 69, 255,
            215, 192, 34, 255,
            153, 212, 32, 255,
            80, 222, 68, 255,
            61, 221, 148, 255,
            43, 216, 222, 255,
            99, 102, 100, 255,
            4, 4, 4, 255,
            4, 4, 4, 255,
            248, 249, 250, 255,
            180, 222, 250, 255,
            204, 209, 253, 255,
            223, 198, 251, 255,
            242, 192, 247, 255,
            246, 195, 227, 255,
            247, 204, 195, 255,
            245, 218, 173, 255,
            236, 230, 153, 255,
            210, 237, 156, 255,
            184, 241, 180, 255,
            176, 242, 217, 255,
            166, 240, 242, 255,
            200, 199, 200, 255,
            5, 5, 5, 255,
            5, 5, 5, 255,
            121, 123, 121, 255,
            12, 38, 162, 255,
            40, 16, 174, 255,
            94, 11, 161, 255,
            137, 1, 118, 255,
            147, 5, 42, 255,
            146, 16, 11, 255,
            111, 38, 4, 255,
            71, 65, 4, 255,
            20, 87, 4, 255,
            7, 94, 11, 255,
            2, 83, 46, 255,
            5, 71, 109, 255,
            0, 0, 0, 255,
            2, 2, 2, 255,
            2, 2, 2, 255,
            191, 192, 191, 255,
            22, 105, 223, 255,
            75, 65, 238, 255,
            142, 39, 226, 255,
            196, 25, 186, 255,
            212, 32, 99, 255,
            212, 55, 33, 255,
            181, 90, 13, 255,
            138, 122, 4, 255,
            58, 146, 7, 255,
            20, 154, 24, 255,
            9, 153, 90, 255,
            9, 139, 169, 255,
            45, 47, 45, 255,
            3, 3, 3, 255,
            3, 3, 3, 255,
            245, 246, 248, 255,
            73, 178, 248, 255,
            137, 148, 253, 255,
            194, 121, 250, 255,
            234, 111, 237, 255,
            244, 117, 186, 255,
            247, 131, 108, 255,
            238, 162, 69, 255,
            215, 192, 34, 255,
            153, 212, 32, 255,
            80, 222, 68, 255,
            61, 221, 148, 255,
            43, 216, 222, 255,
            99, 102, 100, 255,
            4, 4, 4, 255,
            4, 4, 4, 255,
            248, 249, 250, 255,
            180, 222, 250, 255,
            204, 209, 253, 255,
            223, 198, 251, 255,
            242, 192, 247, 255,
            246, 195, 227, 255,
            247, 204, 195, 255,
            245, 218, 173, 255,
            236, 230, 153, 255,
            210, 237, 156, 255,
            184, 241, 180, 255,
            176, 242, 217, 255,
            166, 240, 242, 255,
            200, 199, 200, 255,
            5, 5, 5, 255,
            5, 5, 5, 255,
            121, 123, 121, 255,
            12, 38, 162, 255,
            40, 16, 174, 255,
            94, 11, 161, 255,
            137, 1, 118, 255,
            147, 5, 42, 255,
            146, 16, 11, 255,
            111, 38, 4, 255,
            71, 65, 4, 255,
            20, 87, 4, 255,
            7, 94, 11, 255,
            2, 83, 46, 255,
            5, 71, 109, 255,
            0, 0, 0, 255,
            2, 2, 2, 255,
            2, 2, 2, 255,
            191, 192, 191, 255,
            22, 105, 223, 255,
            75, 65, 238, 255,
            142, 39, 226, 255,
            196, 25, 186, 255,
            212, 32, 99, 255,
            212, 55, 33, 255,
            181, 90, 13, 255,
            138, 122, 4, 255,
            58, 146, 7, 255,
            20, 154, 24, 255,
            9, 153, 90, 255,
            9, 139, 169, 255,
            45, 47, 45, 255,
            3, 3, 3, 255,
            3, 3, 3, 255,
            245, 246, 248, 255,
            73, 178, 248, 255,
            137, 148, 253, 255,
            194, 121, 250, 255,
            234, 111, 237, 255,
            244, 117, 186, 255,
            247, 131, 108, 255,
            238, 162, 69, 255,
            215, 192, 34, 255,
            153, 212, 32, 255,
            80, 222, 68, 255,
            61, 221, 148, 255,
            43, 216, 222, 255,
            99, 102, 100, 255,
            4, 4, 4, 255,
            4, 4, 4, 255,
            248, 249, 250, 255,
            180, 222, 250, 255,
            204, 209, 253, 255,
            223, 198, 251, 255,
            242, 192, 247, 255,
            246, 195, 227, 255,
            247, 204, 195, 255,
            245, 218, 173, 255,
            236, 230, 153, 255,
            210, 237, 156, 255,
            184, 241, 180, 255,
            176, 242, 217, 255,
            166, 240, 242, 255,
            200, 199, 200, 255,
            5, 5, 5, 255,
            5, 5, 5, 255,
            121, 123, 121, 255,
            12, 38, 162, 255,
            40, 16, 174, 255,
            94, 11, 161, 255,
            137, 1, 118, 255,
            147, 5, 42, 255,
            146, 16, 11, 255,
            111, 38, 4, 255,
            71, 65, 4, 255,
            20, 87, 4, 255,
            7, 94, 11, 255,
            2, 83, 46, 255,
            5, 71, 109, 255,
            0, 0, 0, 255,
            2, 2, 2, 255,
            2, 2, 2, 255,
            191, 192, 191, 255,
            22, 105, 223, 255,
            75, 65, 238, 255,
            142, 39, 226, 255,
            196, 25, 186, 255,
            212, 32, 99, 255,
            212, 55, 33, 255,
            181, 90, 13, 255,
            138, 122, 4, 255,
            58, 146, 7, 255,
            20, 154, 24, 255,
            9, 153, 90, 255,
            9, 139, 169, 255,
            45, 47, 45, 255,
            3, 3, 3, 255,
            3, 3, 3, 255,
            245, 246, 248, 255,
            73, 178, 248, 255,
            137, 148, 253, 255,
            194, 121, 250, 255,
            234, 111, 237, 255,
            244, 117, 186, 255,
            247, 131, 108, 255,
            238, 162, 69, 255,
            215, 192, 34, 255,
            153, 212, 32, 255,
            80, 222, 68, 255,
            61, 221, 148, 255,
            43, 216, 222, 255,
            99, 102, 100, 255,
            4, 4, 4, 255,
            4, 4, 4, 255,
            248, 249, 250, 255,
            180, 222, 250, 255,
            204, 209, 253, 255,
            223, 198, 251, 255,
            242, 192, 247, 255,
            246, 195, 227, 255,
            247, 204, 195, 255,
            245, 218, 173, 255,
            236, 230, 153, 255,
            210, 237, 156, 255,
            184, 241, 180, 255,
            176, 242, 217, 255,
            166, 240, 242, 255,
            200, 199, 200, 255,
            5, 5, 5, 255,
            5, 5, 5, 255]);


         function updatePaletteEntry(index, data)
         {
            glpixels[261120 + (index * 4)] = data;
         }

        function writePixel(index, pdex ) {
                    index = index * 4;
            pdex = pdex * 4;
            glpixels.set(palette.subarray(pdex, pdex + 4), index);
//            index = index * 4;
//            glpixels[index] = pdex;
        }

        var myGl;

        function setGlContext(gl)
        {
        myGl = gl;
        }

        var needFrame = true;
        function drawCurrentFrame() {
            
            myGl.activeTexture(myGl.TEXTURE0);
            spiritTexture = updateDynamicTexture(myGl, spiritTexture, 256, 256);
            needFrame = true;
        }

        function startNes() {
            //var romName = $('#romname').val();
            //$.getJSON('romfeeder.svc/getrom/' + romName, function (data) {
                buildCpuOpArray();
                bulbascript.bulbascriptApp.loadRom(rom);
//                element = document.getElementById("canvas1");
//                c = element.getContext("2d");
//                curImageData = c.createImageData(256, 240);
//                alert('NES Ready!');

            // });
        }

        var frames = 0;

        function doRun() {
            $('#run').attr('disabled', true);

            frames = 0;
            keepRunning = true;
            startTime = new Date().getTime();
            $('#framespersec').val('running');
            run();
        }

        function toRun() {
            return (function () { run(); });
        }


        var keepRunning = false;
        var dte = new Date();



        function run() {
            var canv = document.getElementById("canvas1");
            var fn = function () {
                window.requestAnimFrame(fn, canv);

                if (keepRunning) {
                    frames++;
                    stepFrame();

                }
                else {
                    var difTime = new Date().getTime() - startTime;
                    difTime = difTime * 0.001;
                    var fps = frames / difTime;
                    var str = fps + ' fps ';
                    str = str + frames + ' frames in ' + difTime + ' seconds'; ;

                    $('#framespersec').val(str);
                    $('#run').attr('disabled', false);
                }
            };
            fn();
        }

        var startTime;
        function doStep() {
            keepRunning = false;
            runFrame();
        }

        function stepFrame() {
            runFrame();
        }

        var element;
        var c;
    