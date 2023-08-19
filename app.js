// operation functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(args) {
    return +args.reduce((total, value) => total * value, 1);
};

function divide(x, y) {
    return x / y;
}

function operate(sign, x, y) {
    switch (sign) {
        case ('+'):
            return add(+x, +y);
            break;
        case ('-'):
            return subtract(+x, +y);
            break;
        case ('*'):
            return multiply(args);
            break;
        case ('/'):
            return divide(+x, +y);
            break;
    }

}

let firstNumber = {
    storedCheck: false,
};
let secondNumber = {
    storedCheck: false,
};
let operator;

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');


function populateDisplay(digit) {
    display.textContent += digit;
}

function storeDisplay() {
    return display.textContent;
}

function clearDisplay() {
    display.textContent = "";
}



numberButtons.forEach(button => {
    button.addEventListener('click', () => populateDisplay(button.value));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if (!firstNumber.storedCheck) {
            firstNumber.number = storeDisplay();
            firstNumber.storedCheck ^= true;
            operator = button.value;
            clearDisplay();
        }

        else if (!secondNumber.storedCheck) {
            secondNumber.number = storeDisplay();
            secondNumber.storedCheck ^= true;
            clearDisplay();
        }

        else if (firstNumber.storedCheck && secondNumber.storedCheck) {
            display.textContent = operate(operator, firstNumber.number, secondNumber.number);
        }

        
    })
});





