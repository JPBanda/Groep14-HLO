AFRAME.registerComponent('collectible', {
    schema: {
        
    },

    init: function () {
      const collectibles = document.getElementsByClassName("js--item");
      const camera = document.getElementById("js--camera");

      this.collect = () =>{
          for(let i = 0; i < collectibles.length; i++){
            collectibles[i].addEventListener('click', function(evt) {
                    camera.innerHTML += '<a-obj-model class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.1 0.55 -0.8" scale="0.01 0.01 0.01" rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000;" easing="linear"></a-obj-model>'
                    this.remove();
            });
          }
      }

      this.el.addEventListener("click", this.collect);
    },

    update: function () {
        this.collect();
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
