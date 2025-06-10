const btn = document.querySelectorAll('.drum');


// btn.forEach(element => {
    
//     element.addEventListener('click',play);

    

// });

// function handleClick(){
//     // alert('I got clicked!');
    
// }


// function addSound()


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        // console.log(this.innerHTML);
        // this.classList.add('clicked');


        switch (this.innerHTML) {
            case 'w':
                play('./sounds/tom-1.mp3')
                break;
            case 'a':
                play('./sounds/tom-2.mp3');
                break;
            case 's':
                play('./sounds/tom-3.mp3')
                break;
            case 'd':
                play('./sounds/tom-4.mp3');
                break;
            case 'j':
                play('./sounds/snare.mp3')
                break;
            case 'k':
                play('./sounds/crash.mp3');
                break;
            case 'l':
                play('./sounds/kick-bass.mp3');
                break
            default:
                break;
        }
    })
}




function play(path){
    var audio = new Audio(path);
    audio.play();
}