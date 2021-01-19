AFRAME.registerComponent('hint', {
    schema: {
        
    },

    init: function () {
      const text = document.getElementsByClassName("js--hint-text")[0];
      const vlak = document.querySelectorAll("[vlak]");

      this.showHint = function() {
        text.setAttribute('value', "Klik op een hendel om de deur te openen");
      }

    },

    update: function () {
      this.el.addEventListener("test", this.showHint);
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
