/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotalInput = Number(document.querySelector('#subtotal').value);

    let membership = document.querySelector('#member');
    let applyDiscount = membership.checked;

    let discountedSubtotal;

    if (applyDiscount) {
        discountedSubtotal = subtotalInput * .85;
    } else {
        discountedSubtotal = subtotalInput;
    }

    let totalDue = discountedSubtotal.toFixed(2);
    document.querySelector('#total').textContent = `$${totalDue}`; 
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
let sumOfOrigArray = numbersArray.reduce((sum, numbers) => sum + numbers, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfOrigArray;

/* Output Multiplied by 2 Array */
let twiceArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = twiceArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfTwiceArray = twiceArray.reduce((sum, numbers) => sum + numbers, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfTwiceArray;