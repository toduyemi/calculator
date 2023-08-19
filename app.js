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
            return add(x, y);
            break;
        case ('-'):
            return subtract(x, y);
            break;
        case ('*'):
            return multiply(args);
            break;
        case ('/'):
            return divide(x, y);
            break;
    }

}

let firstNumber;
let secondNumber;
let operator;

const operation = {};
