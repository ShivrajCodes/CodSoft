displayValue = '0';

function updateDisplay() {
    const displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.textContent = displayValue;
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        const result = Function('return ' + displayValue)();
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
function clearEntry() {
        const lastIndex = displayValue.length - 1;
        displayValue = displayValue.substring(0, lastIndex);
        if (displayValue === '') {
            displayValue = '0';
        }
        updateDisplay();
    }

function backspace() {
    const lastIndex = displayValue.length - 1;
    displayValue = displayValue.substring(0, lastIndex);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculatePower() {
    try {
        const result = Function('return Math.pow(' + displayValue + ')')();
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

