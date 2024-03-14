let firstInput = 'empty';
let secondInput = 'empty';
let operator = 'empty';
let display = document.getElementById('display');


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
    display.textContent = undefined;
}
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearButtonPressed);

/**
 * Upon pressing of the "+" button, stores the current upper display button and waits for the second input.
 */
function sumButtonPressed() {
    if (display.textContent == undefined) {
        firstInput = 0;
    }
    else {
        firstInput = Number(display.innerText);
    };
    console.log(firstInput);
}

const sumButton = document.getElementById('+');
sumButton.addEventListener('click', sumButtonPressed);