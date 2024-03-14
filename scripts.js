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

