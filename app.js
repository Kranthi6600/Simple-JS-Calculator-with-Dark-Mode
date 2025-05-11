import { add, subtract, multiply, divide } from './math.js';

window.calculate = function(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default: 
            result = 'Invalid Operation';
    }

    document.getElementById('result').textContent = `Result: ${result}`;
};

const darkMode = document.getElementById('dark-mode');


darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');
    darkMode.textContent = isDark ? 'Light' : 'Dark';

});