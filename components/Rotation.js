
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
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
      z: mapRotation.z,
    });
  },
});


AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diver_rotation = this.data.speedOfRotation;      
      var planePosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (diver_rotation.x < 10) {
          diver_rotation.x += 0.5;
          this.el.setAttribute("rotation", diver_rotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diver_rotation.x > -10) {
          diver_rotation.x -= 0.5;
          this.el.setAttribute("rotation", diver_rotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (diver_rotation.z < 20) {
          diver_rotation.z += 0.5;
          this.el.setAttribute("rotation", diver_rotation);
        }
        if (planePosition.y < 2) {
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diver_rotation.z > -10) {
          diver_rotation.z -= 0.5;
          this.el.setAttribute("rotation", diver_rotation);
        }
        if (planePosition.y > -2) {
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
    });
  }
});


