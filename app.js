let variable1 = null;
let operator = null;
let variable2 = null;

let operands = ["/", "*", "-", "+"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let buttons = document.querySelectorAll(".button");
let output = document.querySelector("#output");
let debugButton = document.querySelector("#debug");

function handleOperandInput(operand) {

    if (operator !== null) {
        calculate();
    }

    if (variable1 !== null) {
        operator = operand;
    }
}

function handleNumberInput(numberInput) {

    if (variable1 === null) {
        variable1 = numberInput;
        updateDisplay(variable1);
    }
    else {
        if (operator !== null) {
            if (variable2 === null) {
                variable2 = numberInput;
                updateDisplay(variable2);
            }
            else {
                variable2 += numberInput;
                updateDisplay(variable2);
            }
        }
        else {
            variable1 += numberInput;
            updateDisplay(variable1);
        }
    }
}


function calculate() {
    if (variable1 === null || operator === null || variable2 === null) return;
    if (parseInt(variable1) >= 0 && parseInt(variable2) === 0) {
        alert("good job, you just destroyed the universe");
        clear();
        return;
    }
    let result = Calculator.operate(variable1, variable2, operator);
    if (result !== null) {
        updateDisplay(result);
        variable1 = result;
        operator = null;
        variable2 = null;
    }
}

function clear() {
    variable1 = null;
    operator = null;
    variable2 = null;
    updateDisplay("0");
    return
}


function updateDisplay(newValue) {
    output.textContent = newValue;
}


class Calculator {
    static operate(val1, val2, operand) {
        [val1, val2] = [parseInt(val1), parseInt(val2)];
        if (operand === "+") return this.add(val1, val2);
        if (operand === "-") return this.subtract(val1, val2);
        if (operand === "*") return this.multiply(val1, val2);
        if (operand === "/") return this.divide(val1, val2);
        return;
    }
    static add(val1, val2) {
        return val1 + val2;
    }
    static subtract(val1, val2) {
        return val1 - val2;
    }
    static multiply(val1, val2) {
        return val1 * val2;
    }
    static divide(val1, val2) {
        return val1 / val2;
    }
}


buttons.forEach((button) => {
    button.addEventListener(
        "click",
        (event) => {
            let targetElementText = event.target.textContent;
            if (operands.includes(targetElementText)) handleOperandInput(targetElementText);
            else if (numbers.includes(targetElementText)) handleNumberInput(targetElementText);
            else if (targetElementText === "=") calculate();
            else if (targetElementText === "AC") clear();
            return
        })
})

debugButton.addEventListener("click", (event) => {
    console.log({ variable1, variable2, operator })
})

console.log("script loaded");
