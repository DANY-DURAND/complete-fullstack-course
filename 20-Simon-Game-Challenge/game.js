// $(document).ready(function () {
//     // alert('Hello');
    
//     $('h1')
// });


const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const userClickedPattern = [];


//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

// Create a new variable called level and start at level 0.
var level = 0;

// Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

$(document).keypress(()=>{
    if (!started) {
        // The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

        $('#level-title').text('Level ' + level);
        nextSequence();
        started= true;
    }
});


$('.btn').click(function () { 
    var userChoosenColour = $(this).attr('id');
    // console.log(userChoosenColour);
    userClickedPattern.push(userChoosenColour);
    
    playSound(userChoosenColour);
    animatePress(userChoosenColour)
});

function nextSequence() {

    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++; 

    // Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

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


