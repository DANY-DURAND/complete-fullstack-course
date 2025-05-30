// window.alert("Hello world");
// alert("ehhw");

// const { use } = require("react");

// console.log(typeof(23));
// console.log(typeof("Angela"));

// var myName = prompt("What is your name? ");
// alert(`Hello, ${myName}!`)


// Swapping variables

function test(){
    var a = "3";
    var b = "8";

    var c =a;
    a=b;
    b=c;

    console.log("a is " + a);
    console.log("b is " + b);
    
}

test();


// var tweet = prompt("Express yourself! ");
// var tweetCount = tweet.length

// alert(" You have written "+ (tweetCount) + " characters, you have"+ 140 - tweetCount +" characters left.")
// alert(tweet.slice(0,140))


// var username = "Angela";
//  var usernameSliced = username.slice(1,3);

// alert(usernameSliced);

// var username = prompt("Enter your Name: ")
// var first_letter = username.slice(0,1).toUpperCase();
// alert(first_letter+username.slice(1, username.length).toLowerCase());

// alert(9%6);
// alert(3 + 5*2);

var dogAge = prompt("What is your dog age?")

var humanAge = (dogAge - 2) *4 + 21;

alert("Your dog age in human age is " + humanAge)