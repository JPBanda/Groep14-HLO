window.onload = () => {
    const cursor = document.getElementById("js--cursor");
    const doors = document.getElementsByClassName("js--door");
    const buttons = document.getElementsByClassName("js--button");
    let ani = document.createAttribute('animation');
    let bani = document.createAttribute('animation');

    buttons[0].addEventListener('click', function(evt){
        ani.value = 'property: position; easing: linear; dur: 5000; to: -2 -1.5 -4';
        doors[0].setAttribute('animation', ani.value);

        bani.value = 'property: rotation; easing: linear; dur: 1000; to: 135 0 0';
        buttons[0].setAttribute('animation', bani.value);
    });
    
    buttons[1].addEventListener('click', function(evt){
        ani.value = 'property: position; easing: linear; dur: 5000; to: 2 -1.5 -4'
        doors[1].setAttribute('animation', ani.value);

        bani.value = 'property: rotation; easing: linear; dur: 1000; to: 135 0 0';
        buttons[1].setAttribute('animation', bani.value);
    });
}