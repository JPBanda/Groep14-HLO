AFRAME.registerComponent('zuurvast', {
    schema: {
        
    },

    init: function () {
        const image = document.getElementsByClassName("js--imageChange");
        const pixel = document.querySelectorAll("[image]");
        console.log("in init")
        

        this.test = function() {
            for (let i = 0; i < pixel.length; i++) {
                console.log("in this.test");
                image[i].setAttribute("src", "./img/zuurvast.png");
                
            }

        //this.next = function (params) {
        //    if (image.src = "./img/zuurvast.png") {
        //        
        //    }
                
                
            };

            
        
      
        

        

        //fetch('https://api.gbif.org/v1/species/8018537')
        //.then(response => response.json())
        //.then(data => console.log(data));
//
        //fetch('https://api.gbif.org/v1/species/8018537')
        //.then(response => response.json())
        //.then(data => text_extern[0].setAttribute('value', "Naam: " + data.canonicalName));
        //  }
        
      }
      
      
    ,

    update: function () {
        this.el.addEventListener("click", this.test);
        
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});




    