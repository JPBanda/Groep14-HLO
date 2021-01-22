AFRAME.registerComponent('moving', {
    schema: {
        
    },

    init: function () {
        const places = document.getElementsByClassName('js--place');
        const camera = document.getElementById('js--camera');

        this.moveToLocation = function(){
            for (let i = 0; i < places.length; i++){
                places[i].addEventListener('click', function(evt){
                    let att = document.createAttribute('animation');
                    att.value = 'property: position; easing: linear; dur: 5000; to: ' + this.getAttribute('position').x + " 1.6 " + 
                    this.getAttribute('position').z;
                    camera.setAttribute('animation', att.value);
                });
            }
        }

        this.el.addEventListener("click", this.moveToLocation);
        
    },

    update: function () {
      this.moveToLocation();
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});