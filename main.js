window.onload = () => {
    const cursor = document.getElementById("js--cursor");
    const doors = document.getElementsByClassName("js--door");
    const buttons = document.getElementsByClassName("js--button");
    const hint_lamp = document.getElementsByClassName("js--gloeilamp")[0];
    const block = document.getElementsByClassName("js--block")[0];
    let ani = document.createAttribute('animation');
    let bani = document.createAttribute('animation');
    const text = document.getElementsByClassName("js--hint-text")[0];
    const backdrop = document.getElementsByClassName("js--backdrop")[0];
    const plaatje = document.getElementsByClassName("js--extern")[0];
    const text_extern = document.getElementsByClassName("js--extern-text")[0];

    const camera = document.getElementById('js--camera');
    let scene = document.getElementById('js--scene');
    let pickups = document.getElementsByClassName('js--pickup');
    const placeholders = document.getElementsByClassName('js--placeholder');
    let hold = null;

    let synth = window.speechSynthesis;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'nl-NL';
    utter.volume = 0.5;

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(evt){
            ani.value = 'property: position; easing: linear; dur: 5000; to:' + doors[i].getAttribute('position').x + " -1.6 " + doors[i].getAttribute('position').z;
            doors[i].setAttribute('animation', ani.value);
    
            bani.value = 'property: rotation; easing: linear; dur: 1000; to: 135 0 0';
            buttons[i].setAttribute('animation', bani.value);
        });
    } 


    hint_lamp.addEventListener("click", () => {
        hint_lamp.emit("test");
        backdrop.setAttribute("position", "-4 1.5 0");
        text.setAttribute("position", "-4 1.5 0");
    });


    // block.addEventListener("click", () => {
    //     utter.text = text.getAttribute('value');
    //     synth.speak(utter);
    // });
    

    // fetch('https://api.gbif.org/v1/species/7380886')
    //             .then(response => response.json())
    //             .then(data => console.log(data));

    // fetch('https://api.gbif.org/v1/species/7380886')
    //             .then(response => response.json())
    //             .then(data => text_extern.setAttribute('value', "Naam: " + data.canonicalName + "\n" + "Soort: " + data.kingdom));

    // Google search op images moet nog wel verbeterd worden aangezien hij moeilijke querries niet pakt
    // fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCEZPBtiVPhBdLpa0aDoJ1p1Bz3rwxf3pc&cx=ba3a73fb539676d10&q=Netherlands - Country+image")
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    
    function pickup() {
        for (let i = 0; i < pickups.length; i++) {
          pickups[i].addEventListener('click', function (evt) {
            if (hold == null) {
              camera.innerHTML += '<a-obj-model collectible id="js--hold" class="js--item js--col1 js--interact" src="#microscope-obj" mtl="#microscope-mtl" position="1.2 -1 -1" scale="0.09 0.09 0.09"></a-obj-model>';
              hold = "box";
              this.remove();
            }
          });
        }
      }
    
      pickup();
    
      for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].addEventListener('click', function (evt) {
          if (hold == "box") {
            let box = document.createElement('a-obj-model');
            box.setAttribute("class", "js--pickup js--item js--col1 js--interact");
            box.setAttribute("src", "#microscope-obj")
            box.setAttribute("mtl", "#microscope-mtl")
            box.setAttribute("scale", "0.09 0.09 0.09")
            box.setAttribute("position", {x: this.getAttribute('position').x, y:"0", z: 
            this.getAttribute('position').z});
            scene.appendChild(box);
            document.getElementById('js--hold').remove();
            pickup();
            hold = null;
          }
        });
      }
}







