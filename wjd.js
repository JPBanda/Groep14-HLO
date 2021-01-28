AFRAME.registerComponent('wjd', {
    schema: {
        
    },

    init: function () {
        const box = document.getElementsByClassName("js--end");
        const fact = document.querySelectorAll("[fact]");
        const BASE_URL = 'https://api.gbif.org/v1/species/';
        

        this.anwser = function(){
            for(let i = 0; i < box.length; i++){
                fetch(BASE_URL + "8018537")
                .then(response => response.json())
                .then(data => fact[0].setAttribute('value', "Naam: " + data.canonicalName));
                //.then(data)
                console.log("in this.answer")
              
            }
        }

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
        this.el.addEventListener("click", this.anwser);
        
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});




    