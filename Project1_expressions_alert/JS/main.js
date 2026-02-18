window.alert("Hello World");

// This variable stores the first number
var num1 = 10;

// This variable stores the second number
var num2 = 5;

// This expression adds the two numbers together
var result = num1 + num2;

// This line displays the result on the webpage
document.write("The result is: " + result + "<br>");

// These variables store food groups
var food = "strawberry, blackberry, blueberry";
var meat = "steak, hamburger, fish";

// This displays the food groups
document.write(food + " and " + meat + " are 2 parts of your daily food groups.<br>");

// This function uses the += operator to add numbers together
function addNumbers() {

    // Create a variable and assign it a starting value
    let total = 5;

    // Use the += operator to add 10 to total
    total += 10;

    // Display the result inside the HTML element with id="result"
    document.getElementById("result").innerHTML = "The total is: " + total;
}
