AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.fishes(id, position);
      }
    } ,
  
    fishes: function(id, position) { 
      
      var seaEl = document.querySelector("#sea");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      fishEl.setAttribute("static-body",{shape:"sphere",sphereRadius:5})
      fishEl.setAttribute("gamePlay",{elementId:`#${id}`})
      fishEl.setAttribute("scale",{x:500,y:500,z:500});
      
      fishEl.setAttribute("gltf-model","./assets/models/fish/scene.gltf");   
      fishEl.setAttribute("animation-mixer",{})
      seaEl.appendChild(fishEl);
    }
  });
  