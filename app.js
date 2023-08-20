// operation functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
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
            return multiply(+x, +y);
            break;
        case ('/'):
            return divide(+x, +y);
            break;
        case ('='):
            return x;
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
let operatorClicked = false;

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
// const equalButton = document.querySelector('=');

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
    button.addEventListener('click', () => {
        
        if (operatorClicked) {
            clearDisplay();
            populateDisplay(button.value);
        }

        else {
            populateDisplay(button.value);
        }
        operatorClicked = false;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!operatorClicked) {
            
            if (!firstNumber.storedCheck) {
                firstNumber.number = storeDisplay();
                firstNumber.storedCheck ^= true;
            }

            else if (firstNumber.storedCheck) {
                secondNumber.number = storeDisplay();
                firstNumber.number = operate(operator, firstNumber.number, secondNumber.number);
                display.textContent = firstNumber.number;
            }
        }


        // else if (firstNumber.storedCheck && secondNumber.storedCheck) {

        // }
        
        operator = button.value;
        operatorClicked = true;
    });
});





