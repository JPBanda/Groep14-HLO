window.onload = () => {
    const cursor = document.getElementById("js--cursor");
    const doors = document.getElementsByClassName("js--door");
    const buttons = document.getElementsByClassName("js--button");
    const hint_lamp = document.getElementsByClassName("js--gloeilamp")[0];
    let ani = document.createAttribute('animation');
    let bani = document.createAttribute('animation');



    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(evt){
            ani.value = 'property: position; easing: linear; dur: 5000; to:' + doors[i].getAttribute('position').x + " -1.5 " + doors[i].getAttribute('position').z;
            doors[i].setAttribute('animation', ani.value);
    
            bani.value = 'property: rotation; easing: linear; dur: 1000; to: 135 0 0';
            buttons[i].setAttribute('animation', bani.value);
        });
    } 


    hint_lamp.addEventListener("click", () => {
        hint_lamp.emit("test");
    });

    
}



