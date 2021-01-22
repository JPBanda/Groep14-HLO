AFRAME.registerComponent('pickup', {
    schema: {

    },

    init: function () {
        const pickup = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        const placeholder = document.getElementsByClassName("js--placeholder");
        let scene = document.getElementById('js--scene')
        let hold = null;
        let placed = null;

        this.pickup = function () {
            for (let i = 0; i < pickup.length; i++) {
                pickup[i].addEventListener('click', function (evt) {
                    let placedItem = document.getElementById("js--placed");
                    if (hold == null && placed == null) {
                        camera.innerHTML += '<a-obj-model collectible id="js--hold" class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.2 -1 -1" scale="0.09 0.09 0.09"></a-obj-model>'
                        hold = "item";
                        pickup[i].remove();
                    }

                    if (placed == "itemPlaced" && hold == null) {
                        scene.remove(placedItem);
                        camera.innerHTML += '<a-obj-model collectible id="js--hold" class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.2 -1 -1" scale="0.09 0.09 0.09"></a-obj-model>'
                        hold = "placed";
                        placed = null;
                    }
                });
            }
        }

        this.putDown = function () {
            for (let i=0; i<placeholder.length; i++) {
                placeholder[i].addEventListener('click', function(evt){
                    if (hold == "item" && placed == null) {
                        let box = document.createElement('a-obj-model');
                        box.setAttribute("id", "js--placed")
                        box.setAttribute("class", "js--pickup js--item js--col1 js--interact");
                        box.setAttribute("src", "#microscope-obj")
                        box.setAttribute("mtl", "#microscope-mtl")
                        box.setAttribute("scale", "0.09 0.09 0.09")
                        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0", z: 
                        this.getAttribute('position').z});
                        scene.appendChild(box);
                        document.getElementById('js--hold').remove();
                        hold = null;
                        placed = "itemPlaced"
                    } 
                });
            }
        }

        
        this.el.addEventListener("mouseenter", this.pickup);
        this.el.addEventListener("click", this.putDown);
        
        
    },

    update: function () {
        this.pickup();
        this.putDown();
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});
