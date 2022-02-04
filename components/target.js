

AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 2900 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoin(id, position);
      }
    } ,
  
    createCoin: function(id, position) { 
      
      var seaEl = document.querySelector("#seaMap");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
      
      coinEl.setAttribute("material","color","#ff9100");
      coinEl.setAttribute("gamePlay",{elementId:`#${id}`})
      coinEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
  
      seaEl.appendChild(coinEl);
    }
  });
  
  