let firstInput = 'empty';
let secondInput = 'empty';
let operator = 'empty';
let display = document.getElementById('display');
let resultDisplay = document.getElementById('resultDisplay');


function sum(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b)
};

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(element => {
    element.addEventListener('click', function () {
        // alert(Number(this.innerText));
        display.textContent = display.textContent + this.innerText;
    });
});

/**
 * Clears the upper display zone
 */
function clearButtonPressed() {
    display.textContent = '';
    resultDisplay.textContent = '0';
}
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearButtonPressed);

/**
 * First checks the last character on active display. If the last character there is not a space, it deletes
 * it. If the last character is a space (implying the last pressed button was an operator symbol), then it
 * deletes the last 3 characters. 
 */
function deleteButtonPressed() {
    display.textContent.at(-1);
    console.log(display.textContent.at(-1));
    if (display.textContent.at(-1) !== ' ') {
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (display.textContent.at(-1) == ' ') {
        display.textContent = display.textContent.slice(0, -3);
    }
}
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteButtonPressed);


/**
 * takes an operator and 2 numbers and then calls one of the above functions on the numbers
 * @param {*} number1 first input number
 * @param {*} number2 second input number
 * @param {*} operator introduced as a string (+-/*) 
 * @returns 
 */
function operate(number1, number2, operator) {
    if (operator == '+') {
        return sum(number1, number2);
    }
    else if (operator == '-') {
        return subtract(number1, number2);
    }
    else if (operator == '*') {
        return multiply(number1, number2);
    }
    else if (operator == '/') {
        return divide(number1, number2);
    }
}

/**
 * Upon pressing of the "+" button once, it adds a sum symbol to the display. If there's already a
 * symbol in the active display, it starts an operation with whatever is on the active display.
 */
function sumButtonPressed() {
    if (display.textContent == '') {
        display.textContent = '0' + ' ' + '+' + ' ';
    }
    else {
        let inputArray = display.textContent.split(' ');
        display.textContent = display.textContent + ' ' + '+' + ' ';
        console.table(inputArray);
        if (inputArray.length == 3) {
            display.textContent = '';
            firstInput = Number(inputArray[0]);
            secondInput = Number(inputArray[2]);
            operator = inputArray[1];
            resultDisplay.textContent = operate(firstInput, secondInput, operator);
            firstInput = 'empty';
            secondInput = 'empty';
            operator = 'empty';
        }
    }
}
const sumButton = document.getElementById('+');
sumButton.addEventListener('click', sumButtonPressed);

/**
 * Upon pressing of the "-" button once, it adds a minus symbol to the display. If there's already a
 * symbol in the active display, it starts an operation with whatever is on the active display.
 */
function subtractButtonPressed() {
    if (display.textContent == '') {
        display.textContent = '0' + ' ' + '-' + ' ';
    }
    else {
        let inputArray = display.textContent.split(' ');
        display.textContent = display.textContent + ' ' + '-' + ' ';
        console.table(inputArray);
        if (inputArray.length == 3) {
            display.textContent = '';
            firstInput = Number(inputArray[0]);
            secondInput = Number(inputArray[2]);
            operator = inputArray[1];
            resultDisplay.textContent = operate(firstInput, secondInput, operator);
            firstInput = 'empty';
            secondInput = 'empty';
            operator = 'empty';
        }
    }
}
const subtractButton = document.getElementById('-');
subtractButton.addEventListener('click', subtractButtonPressed);

/**
 * Upon pressing of the "x" button once, it adds a multiply symbol to the display. If there's already a
 * symbol in the active display, it starts an operation with whatever is on the active display.
 */
function multiplyButtonPressed() {
    if (display.textContent == '') {
        display.textContent = '0' + ' ' + '*' + ' ';
    }
    else {
        let inputArray = display.textContent.split(' ');
        display.textContent = display.textContent + ' ' + '*' + ' ';
        console.table(inputArray);
        if (inputArray.length == 3) {
            display.textContent = '';
            firstInput = Number(inputArray[0]);
            secondInput = Number(inputArray[2]);
            operator = inputArray[1];
            resultDisplay.textContent = operate(firstInput, secondInput, operator);
            firstInput = 'empty';
            secondInput = 'empty';
            operator = 'empty';
        }
    }
}
const multiplyButton = document.getElementById('*');
multiplyButton.addEventListener('click', multiplyButtonPressed);

function divideButtonPressed() {                //remember to add division by zero stuff later
    if (display.textContent == '') {
        display.textContent = '0' + ' ' + '/' + ' ';
    }
    else {
        let inputArray = display.textContent.split(' ');
        display.textContent = display.textContent + ' ' + '/' + ' ';
        console.table(inputArray);
        if (inputArray.length == 3) {
            display.textContent = '';
            firstInput = Number(inputArray[0]);
            secondInput = Number(inputArray[2]);
            operator = inputArray[1];
            resultDisplay.textContent = operate(firstInput, secondInput, operator);
            firstInput = 'empty';
            secondInput = 'empty';
            operator = 'empty';
        }
    }
}
const divideButton = document.getElementById('/');
divideButton.addEventListener('click', divideButtonPressed);

/**
 * Upon pressing the equal button, executes the operation written in the active display if and only if there
 * are two numbers and a symbol on it already.
 */
function equalButtonPressed() {
    let inputArray = display.textContent.split(' ');
    if (inputArray.length == 3) {
        display.textContent = '';
        firstInput = Number(inputArray[0]);
        secondInput = Number(inputArray[2]);
        operator = inputArray[1];
        resultDisplay.textContent = operate(firstInput, secondInput, operator);
        firstInput = 'empty';
        secondInput = 'empty';
        operator = 'empty';
    }
    else { return }
}
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', equalButtonPressed);

function dotButtonPressed() {
    let inputArray = display.textContent.split(' ');
    if (inputArray.length == 3 || inputArray.length == 1) {
        display.textContent = display.textContent + '.';
    }
    else { return }
}
const dotButton = document.getElementById('.');
dotButton.addEventListener('click', dotButtonPressed);