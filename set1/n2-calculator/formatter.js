// Full Name: Jasmine De Leon Santos
// Section: IV-BSIT-B
// Activity: N2 - Modular Calculator
// Date: November 28,2026


const symbols = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
  average: "avg",
};

function formatResult(operation, numbers, result) {
  return `${numbers[0]} ${symbols[operation]} ${numbers[1]} = ${result}`;
}

module.exports = { formatResult };