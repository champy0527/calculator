let input = document.getElementById('input');
let result = document.getElementById('result');

const btns = document.querySelectorAll('button');

const nums = document.querySelectorAll('.num')
const ops = document.querySelectorAll('.op');

const clear = document.querySelector('clear');
const equals = document.querySelector('equal');


//clear screen
const clearScreen = () => {
    input.textContent= '';
    result.textContent='';
    numberDisplay = 0;
    operator;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

let numberDisplay = '';
let answer = '';

let prevOperand;
let currentOperand;
let operator;

//clear and delete
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === 'clear') {
            return clearScreen()
        }
        if (btn.value ==='del') {
            numberDisplay = numberDisplay.slice(0, -1);
            result.textContent = numberDisplay;
        }
         
    })
})


const numDisplay = numToDisplay => {
    currentOperand += numToDisplay;

    currentOperand.length < 13 ? currentOperand += numToDisplay : (currentOperand);
    
}

const firstItem = () => {
    nums.forEach(num => {
        num.addEventListener('click', (e) => {
            numDisplay(e.target.textContent)
            result.textContent += currentOperand
        })
        
    })
}


const secondItem = () => {
    currentOperand = '';

    nums.forEach(num => {
        num.addEventListener('click', () => {
            equation = '';

            equation += Number(num.value);
    
            if (equation.length <  12) {
                result.textContent = equation;
            
            } else {
                return
            }
                   
            // console.log(typeof currentOperand);
            // console.log(currentOperand) 
        })
        
    })
}


const operation = () => {
    ops.forEach(op => {
        op.addEventListener('click', () => {
            operator = op.value;
            console.log(operator)
            
            result.textContent += operator
    
            prevOperand = currentOperand;
    
            input.textContent = prevOperand + ' ' + operator
            
            result.textContent = ''
    
            secondItem()
            
        })
    })
}

const calculate = () => {
    firstItem();
    operation();
    secondItem();
}

calculate()

/*
else if (operator === undefined && btn.value >= 0 && btn.value <=9 || btn.value==='.') {
            equation += btn.value;
            console.log(typeof equation);
            input.textContent = equation;
            firstOperand = numberDisplay(equation)
            console.log(typeof firstOperand);
            console.log(firstOperand)
        }
*/

/*
    (btn.value >= 0 && btn.value <=9 || btn.value==='.')  {
        equation += btn.value;
        console.log(typeof equation);
        input.textContent = equation;
        firstOperand = numberDisplay(equation)
        console.log(typeof firstOperand);
        console.log(firstOperand)
    }
*/