let variable1 = null;
let operator = null;
let variable2 = null;
let displayValue = null;

let operands = ["AC", "/", "*", "-", "+"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let buttons = document.querySelectorAll(".button");
let output = document.querySelector("#output");
let debugButton = document.querySelector("#debug");

function handleOperandInput(operand) {
    console.log("----------------");
    console.log("entered handleOperandInput");

    operator = operand;
}

function handleNumberInput(numberInput) {

    if (variable2 === null) {
        if (variable1 === null) {
            variable1 = numberInput;
        }
        else if (typeof (variable1) === "string") {
            variable1 += numberInput;
        }
    }
    else

        updateDisplay(variable1);
}

function handleEqualInput() {

}




function updateDisplay(newValue) {
    output.textContent = newValue;
}


class Calculator {
    static add(val1, val2) {
        return val1 + val2;
    }
    static operate(va1, val2, operand) {
        return;
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
            else if (targetElementText === "") handleEqualInput();
            return
        })
})

debugButton.addEventListener("click", (event) => {
    console.log({ variable1, variable2, operator, displayValue })
})

console.log("script loaded");
