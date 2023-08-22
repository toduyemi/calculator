let firstNumber = {
    storedCheck: false,
};
let secondNumber;
let operator;
let operatorClicked = false;
let displayText;
let MAX = 11;

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clear = document.querySelector('#clear');
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

// const equalButton = document.querySelector('=');

function populateDisplay(digit) {
    displayText = display.textContent;
    if (displayText.length < MAX) {
        display.textContent += digit;
    }
    
}

function storeDisplay() {
    return display.textContent;
}

function clearDisplay() {
    display.textContent = "";
}

function resetApp() {
    clearDisplay();
    firstNumber.number = null;
    firstNumber.storedCheck= false;
    secondNumber = null;
    operator = null;
    operatorClicked = false;
}

clear.addEventListener('click', resetApp);

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
    displayText = display.textContent;
    button.addEventListener('click', () => {
        if (!operatorClicked) {
            
            if (!firstNumber.storedCheck) {
                firstNumber.number = storeDisplay();
                firstNumber.storedCheck ^= true;
            }

            else if (firstNumber.storedCheck) {
                secondNumber = storeDisplay();
                firstNumber.number = operate(operator, firstNumber.number, secondNumber);
                if (firstNumber['number'].toString().length <= MAX) {
                    display.textContent = firstNumber.number;
                }

                else {
                    display.textContent = firstNumber['number'].toExponential(5);
                }
                
            }
        }     
        operator = button.value;
        operatorClicked = true;
    });
});