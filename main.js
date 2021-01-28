window.onload = () => {
  const cursor = document.getElementById("js--cursor");
  const doors = document.getElementsByClassName("js--door");
  const buttons = document.getElementsByClassName("js--button");
  let ani = document.createAttribute("animation");
  let bani = document.createAttribute("animation");
  let door_open = new Audio("./Sounds/door_open.mp3");

  let utter = new SpeechSynthesisUtterance();
  utter.lang = "nl-NL";
  utter.volume = 0.5;

  function doorInfoUnlock() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[0].addEventListener("click", function (evt) {
        bani.value =
          "property: rotation; easing: linear; dur: 1000; to: 0 0 135";
        buttons[0].setAttribute("animation", bani.value);
        door_open.play();
        ani.value =
          "property: position; easing: linear; dur: 11000; to:" +
          doors[1].getAttribute("position").x +
          " -4.6 " +
          doors[1].getAttribute("position").z;
        doors[1].setAttribute("animation", ani.value);
        
      });
    }
  }
  doorInfoUnlock();



};
