let a = 0;
let b = 0;
let operator = 0;
let displayValue = 0;
let tempNumber = '';
let answer = 0;
let expressionObj = {numA:  '', numB: '', operator: '', flag: false}

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
        case '÷':
            return divide(a, b);
            break;
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

const evaluateButton = document.querySelector('#evaluate');
evaluateButton.addEventListener('click', evaluate);

const displayButton = document.querySelectorAll('.display-buttons');
const numberButton = document.querySelectorAll('.number-buttons');
const operatorButton = document.querySelectorAll('.operator-buttons');


displayButton.forEach(function(item) {
    item.addEventListener('click', function () {
        populateDisplay(item.textContent)
    });
});

numberButton.forEach(function(number) {
    number.addEventListener('click', function () {
        saveNumber(number.textContent);
    });
});

operatorButton.forEach(function(operator) {
    operator.addEventListener('click', function() {
        writeExpression(operator.textContent)
    });
});


function evaluate(){
    const display = document.querySelector('h2');
    display.textContent = operate(parseInt(expressionObj.numA) , parseInt(tempNumber), expressionObj.operator);
}

function clearDisplay() {
    const display = document.querySelector('h2');
    display.textContent = '';
    expressionObj.numA = '';
    expressionObj.numB = '';
    expressionObj.flag = false;
    expressionObj.operator = '';
    tempNumber = '';
}

function populateDisplay(displayValue) {
    const display = document.querySelector('h2');
    display.textContent += displayValue;
};

function saveNumber(value) {
    tempNumber += value;
    console.log(tempNumber);
}

function writeExpression(operator){
    if(expressionObj.flag){
        expressionObj.numB = tempNumber;
        answer = operate(parseInt(expressionObj.numA) , parseInt(expressionObj.numB), expressionObj.operator);
        expressionObj.numA = answer;
        expressionObj.operator = operator;
        expressionObj.numB = '';
        tempNumber = '';
        expressionObj.flag = false;
    }
    else {
        expressionObj.numA = tempNumber;
        expressionObj.operator = operator
        tempNumber = '';
        expressionObj.flag = true;

    }
}

