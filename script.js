// Get the HTML Elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

//click on Minus Button
minusButton.addEventListener('click',function () {
    operatorButton.innerText = minusButton.innerText;
    calculate();
});

//click on Plus Button
plusButton.addEventListener('click',function () {
    operatorButton.innerText = plusButton.innerText;
    calculate();
});

//click on Divide Button
divideButton.addEventListener('click',function () {
    operatorButton.innerText = divideButton.innerText;
    calculate();
});

//click on Multiply Button
multiplyButton.addEventListener('click',function () {
    operatorButton.innerText = multiplyButton.innerText;
    calculate();
});

//Equal Button
equalsButton.addEventListener('click',function () {
    calculate();
});

// Calculate
let calculate = () => {
    let firstNumber = firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.innerText;
    let result = 0;
    if (firstNumber !== '' && secondNumber !== ''){
        let num1 = Number.parseFloat(firstNumber);
        let num2 = Number.parseFloat(secondNumber);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        resultButton.innerText = result;
    }
};

// Clear Button Logic
clearButton.addEventListener('click',function () {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.innerText = '+';
    resultButton.innerText = 'RESULT';
});