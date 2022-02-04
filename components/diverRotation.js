AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        var diver_rotation=this.data.speedOfRotation
        if (e.key === "ArrowRight") {
          diver_rotation.z += 0.5;
              this.el.setAttribute("rotation",diver_rotation)
          }
        
        if (e.key === "ArrowLeft") {
          if (diver_rotation.z>-10) {
            diver_rotation.z -= 0.5;
            this.el.setAttribute("rotation",diver_rotation)
          }
        }
          if (e.key === "ArrowUp") {
            if (diver_rotation.z<20) {
              if (diver_rotation.x<10) {
                diver_rotation.x += 0.5;
                this.el.setAttribute("rotation",diver_rotation)
              }
            }
          }
            if (e.key === "ArrowDown") {
              if (diver_rotation.x>-10) {
                diver_rotation.x -= 0.5;
                this.el.setAttribute("rotation",diver_rotation)
              }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  
  
  
  