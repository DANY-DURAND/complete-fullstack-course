// $(document).ready(function () {
//     // alert('Hello');
    
//     $('h1')
// });


const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const userClickedPattern = [];

$('.btn').click(function () { 
        const userChoosenColour = $(this).attr('id');
        // console.log(userChoosenColour);
        userClickedPattern.push(userChoosenColour);

        playSound(userChoosenColour);
        animatePress(userChoosenColour)
});

function nextSequence() {
    const randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);

    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // animatePress(randomChosenColour)
}
function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}


function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed');
        
        setTimeout(() => {
            $(`#${currentColour}`).removeClass('pressed');
        }, 100);
}

$(this).keydown(nextSequence);