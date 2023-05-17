let result = document.getElementById('result');
let operand1 = null;
let operator = null;
let operand2 = null;
let isDecimal = false;

function buttonClicked(button) {
  if (button === '.') {
    if (isDecimal) {
        return;
        }
        isDecimal = true;
        } else if (button === '+' || button === '-' || button === '*' || button === '/') {
        if (operator !== null) {
        calculate();
        }
        operand1 = parseFloat(result.textContent);
        operator = button;
        isDecimal = false;
        } else if (button === '=') {
        calculate();
        isDecimal = false;
        } else if (button === 'C') {
        clear();
        isDecimal = false;
        } else {
        result.textContent += button;
        }
        }
        
        function calculate() {
        if (operator === null) {
        return;
        }
        operand2 = parseFloat(result.textContent);
        switch (operator) {
        case '+':
        result.textContent = operand1 + operand2;
        break;
        case '-':
        result.textContent = operand1 - operand2;
        break;
        case '*':
        result.textContent = operand1 * operand2;
        break;
        case '/':
        result.textContent = operand1 / operand2;
        break;
        }
        operator = null;
        operand1 = parseFloat(result.textContent);
        operand2 = null;
        }
        
        function clear() {
        result.textContent = '';
        operand1 = null;
        operator = null;
        operand2 = null;
        }