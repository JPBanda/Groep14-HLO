AFRAME.registerComponent('pickup', {
    schema: {

    },

    init: function () {
        const pickup = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        const placeholder = document.getElementsByClassName("js--placeholder");
        let scene = document.getElementById('js--scene');
        let hold = null;
        
        

        this.pickup = function() {
            for (let i = 0; i<pickup.length; i++) {
              pickup[i].addEventListener('click', function(evt){
                if (hold==null) {
                camera.innerHTML += '<a-obj-model collectible id="js--hold" class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.2 -1 -1" scale="0.09 0.09 0.09"></a-obj-model>';
                hold = "item";
                this.remove();
                }
              });
            }
        }

        this.putDown = function () {
            for (let i=0; i<placeholder.length; i++) {
                placeholder[i].addEventListener('click', function(evt){
                    if (hold == "item") {
                        let box = document.createElement('a-obj-model');
                        box.setAttribute("class", "js--item js--col1 js--interact");
                        box.setAttribute("src", "#microscope-obj")
                        box.setAttribute("mtl", "#microscope-mtl")
                        box.setAttribute("scale", "0.09 0.09 0.09")
                        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0", z: 
                        this.getAttribute('position').z});
                        scene.appendChild(box);

                        hold = null;
                    }
                    else {
                        this.pickup;
                    }
                });
            }
        }

        // this.pickupAgain = function() {
        //     for (let i = 0; i < pickup.length; i++) {
        //         pickup[i].addEventListener('click', function (evt) {
        //             if (placed == "itemPlaced") {
        //                 camera.innerHTML += '<a-obj-model collectible id="js--hold" class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.2 -1 -1" scale="0.09 0.09 0.09"></a-obj-model>'
        //                 hold = "item";
        //                 this.remove();
        //             }
        //         });
        //     }
        // }

        this.el.addEventListener("click", this.pickup);
        this.el.addEventListener("click", this.putDown);
        // this.el.addEventListener("click", this.pickupAgain);
    },

    update: function () {
        this.pickup();
        this.putDown();
        // this.pickupAgain();
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});
