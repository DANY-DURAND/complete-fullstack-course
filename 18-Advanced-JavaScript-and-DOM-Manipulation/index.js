const btn = document.querySelectorAll(".drum");

// btn.forEach(element => {

//     element.addEventListener('click',play);

// });

/*function handleClick(){
 alert('I got clicked!');

}*/

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    // console.log(this.innerHTML);
    // this.classList.add('clicked');
    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML)

  });
}

function play(path) {
  var audio = new Audio(path);
  audio.play();
}

document.addEventListener("keydown", (event) => {
//   alert("Key was pressed!");
//   console.log(event.key);
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      play("./sounds/tom-1.mp3");
      break;
    case "a":
      play("./sounds/tom-2.mp3");
      break;
    case "s":
      play("./sounds/tom-3.mp3");
      break;
    case "d":
      play("./sounds/tom-4.mp3");
      break;
    case "j":
      play("./sounds/snare.mp3");
      break;
    case "k":
      play("./sounds/crash.mp3");
      break;
    case "l":
      play("./sounds/kick-bass.mp3");
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');

  setTimeout(()=>{
    activeButton.classList.remove('pressed')
  }, 100);

}
