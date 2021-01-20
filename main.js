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


    block.addEventListener("click", () => {
        utter.text = text.getAttribute('value');
        synth.speak(utter);
    });
    

    fetch('https://api.gbif.org/v1/species/7380886')
                .then(response => response.json())
                .then(data => console.log(data));

    fetch('https://api.gbif.org/v1/species/7380886')
                .then(response => response.json())
                .then(data => text_extern.setAttribute('value', "Naam: " + data.canonicalName + "\n" + "Soort: " + data.kingdom));

    // Google search op images moet nog wel verbeterd worden aangezien hij moeilijke querries niet pakt
    // fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCEZPBtiVPhBdLpa0aDoJ1p1Bz3rwxf3pc&cx=ba3a73fb539676d10&q=Netherlands - Country+image")
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    
}





