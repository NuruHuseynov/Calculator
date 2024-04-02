function appendToDisplay(value) {
    var display = document.getElementById('display');
    if (display.tagName === 'INPUT') {
        display.value += value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    var display = document.getElementById('display');
    if (display.tagName === 'INPUT') {
        display.value = '';
    } else {
        display.textContent = '';
    }
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}
