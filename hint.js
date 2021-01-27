AFRAME.registerComponent('hint', {
    schema: {
        
    },

    init: function () {
      const text = document.getElementsByClassName("js--hint-text");
      const hint_lamp = document.getElementsByClassName("js--gloeilamp");

      this.setHint = function(){
        for (let i = 0; i < hint_lamp.length; i++)
          hint_lamp[i].addEventListener("click", (evt) => {
            if(i == 0){
              text[i].setAttribute('value', "Kijk nog eens goed naar de kleur en probeer het opnieuw");
              }

            if(i == 1){
              text[i].setAttribute('value', "Kijk nog eens goed naar de vorm van het voorbeeld en probeer het opnieuw");
            }
            });
        }

        this.el.addEventListener("click", this.setHint);
        this.el.addEventListener("fout", this.setFout);

    },

    update: function () {
      this.setHint();
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
