// main.js

const mathOperations = require('./mathOperations.js');

const num1 = 11;
const num2 = 5;

console.log("Addition: ", mathOperations.add(num1, num2));          // Outputs: 15
console.log("Subtraction: ", mathOperations.subtract(num1, num2));  // Outputs: 5
console.log("Multiplication: ", mathOperations.multiply(num1, num2)); // Outputs: 50
console.log("Division: ", mathOperations.divide(num1, num2));       // Outputs: 2
