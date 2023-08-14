let a = 0;
let b = 0;
let operator = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b){ 
    return a / b;
}

function operate(a, b, operator){
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (clearDisplay))

function clearDisplay() {
    const display = document.querySelector('.display');
    display.textContent = '';
}

//function populateDisplay()