// ------------------------------------------------------------------------------
//  <autogenerated>
//      This code was generated by a tool.
//      
// 
//      Changes to this file may cause incorrect behavior and will be lost if 
//      the code is regenerated.
//  </autogenerated>
// ------------------------------------------------------------------------------

namespace GtkNes {
    
    
    public partial class DebugStepper {
        
        private Gtk.HButtonBox hbuttonbox1;
        
        private Gtk.Button btnStep;
        
        private Gtk.Button btnFrame;
        
        protected virtual void Build() {
            Stetic.Gui.Initialize(this);
            // Widget GtkNes.DebugStepper
            Stetic.BinContainer.Attach(this);
            this.Name = "GtkNes.DebugStepper";
            // Container child GtkNes.DebugStepper.Gtk.Container+ContainerChild
            this.hbuttonbox1 = new Gtk.HButtonBox();
            this.hbuttonbox1.Name = "hbuttonbox1";
            // Container child hbuttonbox1.Gtk.ButtonBox+ButtonBoxChild
            this.btnStep = new Gtk.Button();
            this.btnStep.CanFocus = true;
            this.btnStep.Name = "btnStep";
            this.btnStep.UseUnderline = true;
            this.btnStep.Label = Mono.Unix.Catalog.GetString("Step");
            this.hbuttonbox1.Add(this.btnStep);
            Gtk.ButtonBox.ButtonBoxChild w1 = ((Gtk.ButtonBox.ButtonBoxChild)(this.hbuttonbox1[this.btnStep]));
            w1.Expand = false;
            w1.Fill = false;
            // Container child hbuttonbox1.Gtk.ButtonBox+ButtonBoxChild
            this.btnFrame = new Gtk.Button();
            this.btnFrame.CanFocus = true;
            this.btnFrame.Name = "btnFrame";
            this.btnFrame.UseUnderline = true;
            this.btnFrame.Label = Mono.Unix.Catalog.GetString("Frame");
            this.hbuttonbox1.Add(this.btnFrame);
            Gtk.ButtonBox.ButtonBoxChild w2 = ((Gtk.ButtonBox.ButtonBoxChild)(this.hbuttonbox1[this.btnFrame]));
            w2.Position = 1;
            w2.Expand = false;
            w2.Fill = false;
            this.Add(this.hbuttonbox1);
            if ((this.Child != null)) {
                this.Child.ShowAll();
            }
            this.Hide();
        }
    }
}