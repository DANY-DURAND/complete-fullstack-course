const btn = document.querySelectorAll('.drum');


btn.forEach(element => {
    
    element.addEventListener('click',play);

});

// function handleClick(){
//     // alert('I got clicked!');
    
// }


// function addSound()

function play(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}