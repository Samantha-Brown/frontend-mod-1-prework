/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Each section has 2 examples that are already completed. Your task is to complete
any remaining prompt in each section.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/dataTypes.js`
*/


//-------------------
//STRINGS
//-------------------

// EXAMPLE: Write code below to log the String "Alan Turing" in the console:
console.log("Alan Turing"); "Alan Turing"

// EXAMPLE: Write code below to log `Welcome to Turing!` in the console:
console.log('Welcome to Turing!'); "Welcome to Turing"

// YOU DO: Write code below to log `99 bottles of pop on the wall...`:
console.log("99 bottles of pop on the wall..."); "99 bottles of pop on the wall..."

// YOU DO: Write code below to log one line from your favorite song or movie:
console.log('Am I more than you bargained for by Fall Out Boy'); "Am I more than you bargained for by Fall Out Boy"


//-------------------
//NUMBERS
//-------------------

// EXAMPLE: log the result of the sum of 2 and 2 to the console:
console.log(2 + 2); 4

// EXAMPLE: log the result of 7 subtracted from 83 console:
console.log(83 - 7); 76

// YOU DO: log the result of 6 multiplied by 53 to the console:
console.log(6 * 53); 318

// YOU DO: log the result of 20 divided by 4 to console:
console.log(20 / 4); 5

// YOU DO: log the result of the modulo of 10 into 54:
console.log(54 % 10); 4


//-------------------
// BOOLEANS
//-------------------

// EXAMPLE: log to the console the result of 1 is equal to 2:
console.log(1 === 2); false

// EXAMPLE: log to the console the result of 7 is greater than 2:
console.log(7 > 2); true

// YOU DO: log to the console the result of "hello" is equal to "Hello":
console.log("hello" === "Hello"); false
// YOU DO: log to the console the result of 3 is not equal to 4:
console.log(3 != 4); true
// YOU DO: log to the console the result of 4 is less than or equal to 5:
console.log(4 <= 5); true


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?i
console.log("hello" === "Hello"); returns as "Uncaught" ReferenceError: hello is not defined
// Figured out the "hello" === "Hello"); I wasn't imputting it with ""
