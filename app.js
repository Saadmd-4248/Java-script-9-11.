    //  QUESTION 1
var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
var city = prompt("Enter your city:");
if (city === cities[0]) {
    alert("Welcome to the city of lights");
} else if (city === cities[1]) {
    alert("Welcome to the heart of Pakistan");
} else if (city === cities[2]) {
    alert("Welcome to the capital of Pakistan");
} else if (city === cities[3]) {
    alert("Welcome to the city of mountains");
} else if (city === cities[4]) {
    alert("Welcome to the city of flowers");
} else {
    alert("Welcome to " + city);
}
// QUESTION 2
var gender = prompt("Enter your gender (male/female):");
gender = gender.toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Madam");
} else {
    alert("Have a good Day");
}
// QUESTION 3

var signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
} else {
    alert("Invalid signal color! Please enter Red, Yellow, or Green.");
}
// QUESTION 4
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else if (remainingFuel > 0.25) {
    alert("Your car is in good state.");
} else {
    alert("Your fuel is exactly 0.25 litres.");
}
// QUESTION 5

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");  // This alert will be displayed
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");  // This alert will NOT be displayed
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");  // This alert will NOT be displayed
}
if (c === 13) {
    alert("condition 2 is true");  // This alert will be displayed
}
if (++c < 14) {
    alert("condition 3 is true");  // This alert will NOT be displayed
}
if (c === 14) {
    alert("condition 4 is true");  // This alert will be displayed
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");  // This alert will be displayed
}

// QUESTION 7
var secretNumber = Math.floor(Math.random() * 10) + 1; 
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, that's not correct. The secret number was " + secretNumber);
}
// QUESTION 8
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}
// QUESTION 9
var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("The number " + number + " is an even number.");
} else {
    alert("The number " + number + " is an odd number.");
}



