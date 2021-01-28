window.onload = () => {
    const secret_button = document.getElementsByClassName("js--secret");
    const secret_door = document.getElementsByClassName("js--secret_door");
    let secret_ani = document.createAttribute('animation');
    let secret_bani = document.createAttribute('animation');


        for (let i = 0; i < secret_button.length; i++){
            secret_button[i].addEventListener('click', function(evt){
                secret_bani.value = 'property: rotation; easing: linear; dur: 1000; to: -135 0 0';
                secret_button[i].setAttribute('animation', secret_bani.value);
    
                // Foute antwoorden
                if(i == 0){
                    secret_ani.value = 'property: position; easing: linear; dur: 5000; to:' + secret_door[0].getAttribute('position').x + " -4.6 " + secret_door[0].getAttribute('position').z;
                    secret_door[0].setAttribute('animation', ani.value);
                }
            });

        }


    // let synth = window.speechSynthesis;
    // let utter = new SpeechSynthesisUtterance();
    // utter.lang = 'nl-NL';

    


    // hint_lamp.addEventListener("click", (evt) => {
    //     hint_lamp.emit("test");
    // });


    // block.addEventListener("click", (evt) => {
    //     for (let i = 0; i < text.length; i++){
    //         utter.text = text[i].getAttribute('value');
    //         synth.speak(utter);
    //         console.log("event listener werkt")
    //     }
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

    
}





