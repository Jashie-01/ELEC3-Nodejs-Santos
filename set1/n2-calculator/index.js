// Full Name: Jasmine De Leon Santos
// Section: IV-BSIT-B
// Activity: N2 - Modular Calculator
// Date: November 28,2026

const path = require("path"); // the built-in module


const operations = require("./operations"); // the two custom modules
const { formatResult } = require("./formatter");

const fileName = path.basename(__filename); // Gets just the file name ("index.js")

//  process.argv is a list of everything typed in the terminal.
const operation = process.argv[2]; // The operation is the 3rd argument (index 2)
const numbers = process.argv.slice(3).map(Number); // The numbers are the rest of the arguments, start from position 3 and take everything after it

// Checking 1: Is the operation correct?
if (!Object.hasOwn(operations, operation)) {
  console.log(`Error: Unknown operation "${operation}".`);
  console.log(`Usage: node ${fileName} <add|subtract|multiply|divide|average> <numbers>`); // A guide that shows the right way to type, and it only appears when the user type wrong data.
  process.exit(1); // this stops the program. The 1 is the exit code.
}

// Checking 2: Are the inputs real numbers?
if (numbers.length === 0 || numbers.some(isNaN)) {  // "Is this Not a Number" It gives true for something like NaN and false for a real number.
  console.log("Error: Please enter valid numbers.");
  console.log(`Usage: node ${fileName} <add|subtract|multiply|divide|average> <numbers>`);
  process.exit(1); 
}

// Run the calculation. If something goes wrong, like dividing by zero,
// "catch" shows the error message that operations.js created.
try {
  const result = operations[operation](numbers[0], numbers[1]);
  console.log(formatResult(operation, numbers, result));
} catch (err) {
  console.log(`Error: ${err.message}`);
  console.log(`Usage: node ${fileName} <add|subtract|multiply|divide|average> <numbers>`);
  process.exit(1);
}