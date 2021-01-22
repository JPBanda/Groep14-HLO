AFRAME.registerComponent('putdown', {
    schema: {
        
    },

    init: function () {
        const placeholder = document.getElementsByClassName("js--placeholder");
        let scene = document.getElementById('js--scene');
        
        let hold = null;

        this.putDown = function () {
            for (let i=0; i<placeholder.length; i++) {
                placeholder[i].addEventListener('click', function(evt){
                    if (hold == "item") {
                        let box = document.createElement('a-obj-model');
                        box.setAttribute("class", "js--hold js--item js--col1 js--interact");
                        box.setAttribute("src", "#microscope-obj")
                        box.setAttribute("mtl", "#microscope-mtl")
                        box.setAttribute("scale", "0.09 0.09 0.09")
                        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0", z: 
                        this.getAttribute('position').z});
                        scene.appendChild(box);
                        document.getElementsByClassName('js--hold').remove();
                        addListeners();
                        hold = null;
                    }
                });
            }
        }
        this.el.addEventListener("click", this.putDown);
    },

    update: function () {
        this.putDown();
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
