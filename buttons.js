AFRAME.registerComponent('button', {
    schema: {
        
    },

    init: function () {
        const doors = document.getElementsByClassName("js--door");
        const buttons = document.getElementsByClassName("js--button");
        const text = document.getElementsByClassName("js--hint-text");
        let ani = document.createAttribute('animation');
        let bani = document.createAttribute('animation');
      
        this.activateButton = function(){
            for (let i = 0; i < buttons.length; i++){
                buttons[i].addEventListener('click', function(evt){
                    bani.value = 'property: rotation; easing: linear; dur: 1000; to: 0 0 -45';
                    buttons[i].setAttribute('animation', bani.value);
        
                    // Foute antwoorden
                    if(i == 0){
                        text[0].setAttribute('value', "Dit is helaas het verkeerde antwoord, de kleur hier is roze niet blauw.");
                    }
                    if(i == 5){
                        text[1].setAttribute('value', "Dit is helaas het verkeerde antwoord, de vorm van deze soort is staafvormig");
                    }

                    // Goede antwoorden
                    if(i == 1){
                        ani.value = 'property: position; easing: linear; dur: 5000; to:' + doors[0].getAttribute('position').x + " -4.6 " + doors[1].getAttribute('position').z;
                        doors[1].setAttribute('animation', ani.value);
                    }
                    if (i == 3){
                        ani.value = 'property: position; easing: linear; dur: 5000; to:' + doors[2].getAttribute('position').x + " -4.6 " + doors[2].getAttribute('position').z;
                        doors[2].setAttribute('animation', ani.value);
                    }

                    // Antwoorden die er totaal niet bij horen
                    if(i == 2){
                        text[0].setAttribute('value', "Gram neutraal is niet benoemd binnen dit onderwerp, tenzij je een zwart wit filter hebt.");
                    }
                    if(i == 4){
                        text[1].setAttribute('value', "Als het goed is heb je dit nog niet behandeld, daarnaast hoe zie je hier een spiraal");
                    }
                });
            } 
        }

        this.el.addEventListener("click", this.activateButton);
    },

    update: function () {
      this.activateButton();
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
