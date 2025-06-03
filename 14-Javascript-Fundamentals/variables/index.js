// window.alert("Hello world");
// alert("ehhw");

// const { use } = require("react");

// console.log(typeof(23));
// console.log(typeof("Angela"));

// var myName = prompt("What is your name? ");
// alert(`Hello, ${myName}!`)


// Swapping variables

// function test(){
//     var a = "3";
//     var b = "8";

//     var c =a;
//     a=b;
//     b=c;

//     console.log("a is " + a);
//     console.log("b is " + b);

// }

// test();


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

// var dogAge = prompt("What is your dog age?")

// var humanAge = (dogAge - 2) *4 + 21;

// alert("Your dog age in human age is " + humanAge)

// Challenge

// function getMilk(money){
// console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("Buy " + Math.floor(money / 1.5) + " bottles of Milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

// }
// getMilk(5);

// Challenge

/*

Life in Weeks Coding Exercise
I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.

In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.



It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.



For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.



IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input

e.g. If you are 56 years old:

lifeInWeeks(56)
Example Output

You have 12410 days, 1768 weeks, and 408 months left.
*/

// function lifeInWeeks(age){
//     var remainingYears = 90 -age;
//     var days = remainingYears*365;
//     var weeks =  remainingYears * 52;
//     var months = remainingYears * 12;

//     console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
// }

// lifeInWeeks(56);

/*

BMI Calculator Challenge
Create a BMI calculator using JavaScript functions. 

The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease. You can calculate it using the formula below, where weight divided by height squared.
Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
The first parameter should be the weight and the second should be the height.
*/
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height){
//     return Math.round(weight/Math.pow(height,2));
// }


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

// var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi);


// Random generate number 0 - 6

// var n = Math.random();
// n = n*6;
// n= Math.floor(n) +1;
// console.log(n);


// Love calculator

// var name1= prompt("Enter your name: ");
// var name2 = prompt("Enter the name of your crush:");

// var loveNumber = Math.floor(Math.random() * 100) +1;

// alert(`The love score between ${name1} and ${name2} is ${loveNumber}%!`)


// function bmiCalculator(weight, height) {

//     var bmi = Math.round((weight / Math.pow(height, 2)) * 10) / 10;
//     var interpretation = '';

//     if (bmi > 24.9) {
//         interpretation = `Your BMI is ${bmi}, so you are overweight.`;
//     } else if (bmi <= 24.9 && bmi > 18.5) {
//         interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
//     } else {
//         interpretation = `Your BMI is ${bmi}, so you are underweight.`;
//     }

//     return interpretation;
// }

// function isYearALeapYear(year) {
//     if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
//         return true;
//     }
//     return false;
// }

// var year = 2000;

// console.log(`${isYearALeapYear(year) ? "Yes" : "No"} leap year.`);

var names = ["Bernice", "Chouetta", "Kenny", "Dany", "Helene"];

var yourName = prompt("Enter your name:");

if (names.includes(yourName)) {
    alert(`Welcome, ${yourName}!`);
} else {
    alert(`Hi! We couldn't find you in our list of invitees.`);
}
