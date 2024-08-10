// mathOperations.js

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Division by zero is not allowed.");
    }
}

// Export functions as a module
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
