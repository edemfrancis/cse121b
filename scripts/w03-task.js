/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener("click", function() {
    let addnumbers = Number(document.getElementById('add1').value);
    let addnumbers2 = Number(document.getElementById('add2').value);

    document.querySelector('#sum').value = add(addnumbers, addnumbers2);
});
/* Function Expression - Subtract Numbers */
function substract(sub1, sub2){
    return sub1 - sub2;
};

document.querySelector("#subtractNumbers").addEventListener("click", function() {
    let substract1 = Number(document.getElementById('subtract1').value);
    let substract2 = Number(document.getElementById('subtract2').value);

    document.querySelector('#difference').value = substract(substract1, substract2);
})

/* Arrow Function - Multiply Numbers */
const multiply = (a, b) => a * b;

document.getElementById("multiplyNumbers").addEventListener('click', function() {
    let multiplyNums = parseFloat(document.getElementById('factor1').value);
    let multiplyNumbs = parseFloat(document.getElementById('factor2').value);

    document.getElementById("product").value = multiply(multiplyNums, multiplyNumbs);
});

/* Open Function Use - Divide Numbers */
let divide = (a, b) => a / b;

const divideNumber = () => {
    let number1 = parseFloat(document.getElementById("dividend").value);
    let number2 = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(number1, number2);
    document.getElementById("quotient").value = quotient;
}; 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("divideNumbers").addEventListener("click", divideNumber);
});
/* Decision Structure */
 // Add an event listener to the "Get Total Due" button
 // Get numeric value entered by the user
let totalSpan = document.getElementById("total");

document.getElementById('getTotal').addEventListener('click', () => {
    const subtotalValue = parseFloat(document.getElementById("subtotal").value);

    // check if user input is valid
    if (!isNaN(subtotalValue)) {
        // check to see if member checkbox has been checked
        const isMemberChecked = document.getElementById("member").checked;

        // apply the discount of 20%
        let discount = isMemberChecked ? 0.2 : 0;

        // Calculate total after discount
        let total = subtotalValue - (subtotalValue * discount);

        // Display the total with two decimals using template string
        totalSpan.textContent = `Total: $${total.toFixed(2)}`;
    } else {
        // Display an error message if the input is not a valid number
        console.error("Invalid input. Please enter a valid number for the subtotal.");
    }
});


let checkbox = document.getElementById('member');
checkbox.addEventListener( "change", () => {
    if ( checkbox.checked ) {
       text.innerHTML = " Check box is checked. ";
    } else {
       text.innerHTML = "";
    }
 });


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayElement = document.getElementById("array");
arrayElement.innerHTML = numArray.join(", ")
/* Output Odds Only Array */
let oddsElement = document.getElementById("odds");

let oddNumbers = numArray.filter(number => number % 2 !== 0);

oddsElement.innerHTML = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenElement = document.getElementById("evens");
let evenNumbers = numArray.filter(number => number % 2 === 0);
evenElement.innerHTML = evenNumbers.join(", ")

/* Output Sum of Org. Array */
let sumElement = document.getElementById("sumOfArray");
let sumNum = numArray.reduce((sum, numbers) => sum + numbers);
sumElement.innerHTML = sumNum

/* Output Multiplied by 2 Array */
let mulElement = document.getElementById("multiplied");
let mulNumbers = numArray.map(number => number * 2)
mulElement.innerHTML = mulNumbers

/* Output Sum of Multiplied by 2 Array */
// Use map() and reduce() to calculate the sum after multiplying each element by two
let sumOfMultiplied = numArray.map(number => number * 2).reduce((x, y) => x + y, 0);

// Assign the result to the HTML element with ID "sumOfMultiplied"
document.getElementById("sumOfMultiplied").textContent = `Sum of Multiplied: ${sumOfMultiplied}`