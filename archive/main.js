let input = document.getElementById('input');
let result = document.getElementById('result');

const btns = document.querySelectorAll('button');

const nums = document.querySelectorAll('.num')
const ops = document.querySelectorAll('.op');

const equals = document.querySelector('equal');


//clear screen
const clearScreen = () => {
    input.textContent= '';
    result.textContent='';
    numberDisplay = '';
    operator;
}

const deleteBtn = () => {
    numberDisplay = numberDisplay.slice(0, -1);
    result.textContent = numberDisplay;
}

const displayFirstOperand = (num) => {
    if (numberDisplay.length < 13) {
        numberDisplay += num;
        result.textContent = numberDisplay;
        
        if (num === NaN) {
            prevOperand = numberDisplay.slice(0, -1)
            prevOperand = Number(numberDisplay);
        console.log(`previous operand is ${prevOperand}`)
        }

        return prevOperand
    }
}

const displaySecondOperand = (num) => {
    if (numberDisplay.length < 13) {
        // prevOperand = currentOperand;
        // console.log(prevOperand);
        numberDisplay += num;
        result.textContent = numberDisplay;
        
        currentOperand = Number(numberDisplay)
    }
}

const displayEquation = () => {
    // prevNum = String(prevOperand)
    // currNum = String(currentOperand)
    // currOp = String(operator)
    // input.textContent = prevOperand + operator + currentOperand
    //STILL CAUSES ISSUES!!!
    console.log(prevOperand)
    console.log(currentOperand)
    console.log(operator)
}

const operation = op => {
    prevOperand = currentOperand;
    input.textContent = prevOperand;
    console.log(op)
}

// clear, delete, and display number
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === 'clear') {
            return clearScreen();
        } else if (btn.value ==='del') {
            return deleteBtn();
        } else if (operator === undefined && btn.value >= 0 && btn.value <=9 && btn.value !== '=' || btn.value==='.') {
            displayFirstOperand(btn.value);
        } else if (operator = true && btn.value !== '=') {
            displaySecondOperand(btn.value)

        } else if (btn.value === '=') {
            displayEquation()
            // input.textContent =+ numberDisplay;
            // result.textContent = calcResult(prevOperand, currentOperand);
        }
    })
})

// ops.forEach(op => {
//     op.addEventListener('click', () => {
//         operator = op.value;
//         // result.textContent += operator;
        
//         input.textContent = numberDisplay;
        
//         result.textContent = '';
//         numberDisplay = '';    
//     })
// })


let numberDisplay = '';
let answer = '';

let prevOperand;
let currentOperand;
let operator;

// FIGURE OUT THE EQUAL SIGN


// const add = (prevOperand, currentOperand) => prevOperand + currentOperand;
// const subtract = (prevOperand, currentOperand) => prevOperand-currentOperand;
// const multiply = (prevOperand, currentOperand) => prevOperand*currentOperand;
// const divide = (prevOperand, currentOperand) => prevOperand/currentOperand;
// const powerOf = (prevOperand, currentOperand) => prevOperand**currentOperand;


// const calcResult = (prevOperand, currentOperand) => {
//     if (operator === '+') {
//         add(prevOperand, currentOperand)
//     }
//     if (operator === '-') {
//         subtract(prevOperand, currentOperand)
//     }
//     if (operator === '*') {
//         multiply(prevOperand, currentOperand)
//     }
//     if (operator === '/') {
//         divide(prevOperand, currentOperand)
//     }
//     if (operator === '**') {
//         powerOf(prevOperand, currentOperand)
//     }
// }
