// $(document).ready(function () {
//     // alert('Hello');
    
//     $('h1')
// });

const userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];


function nextSequence() {
    const randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);

    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    $('.btn').click(function () { 
        const userChoosenColour = $(this).attr('id');
        console.log(userChoosenColour);

        userClickedPattern.push(userChoosenColour);

        playSound(userChoosenColour);
    });

}
function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}


function animatePress(currentColour) {
    $(`#${currentColour}`).click(function(){

        $(this).addClass('pressed');
        
        setTimeout(() => {
            $(this).removeClass('pressed');
        }, 100);

    });
}
