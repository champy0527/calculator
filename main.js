let input = document.getElementById('input');
let result = document.getElementById('result');

const keys = document.querySelectorAll('.keys');
const btnContainer = document.querySelector('.btnContainer')

keys.forEach(key => {
    key.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action
            const keyContent = key.textContent;
            let displayedInput = input.textContent;
            let displayedResult = result.textContent;
            
            let firstValue = btnContainer.dataset.firstValue;
            let operator = btnContainer.dataset.operator;
            let secondValue;
            let previousKeyType = btnContainer.dataset.previousKeyType


            if (!action) {
                if (!displayedInput || previousKeyType === 'operator') {
                    result.textContent += keyContent;
                    btnContainer.dataset.previousKeyType = 'number';
                } else {
                    result.textContent = keyContent;
                    btnContainer.dataset.previousKeyType = 'number'
                }

            } else if (action === 'decimal' && !displayedInput) {
                input.textContent = '0.'
                btnContainer.dataset.previousKeyType = 'decimal'
            } else if (action === 'decimal' && !displayedInput.includes('.')) {
                input.textContent += keyContent;          

            } else if (action === 'clear') {
                input.textContent = '';
                result.textContent = '';
                btnContainer.dataset.previousKeyType = 'clear'

            } else if (action === 'delete') {
                input.textContent = input.textContent.slice(0,-1);
                btnContainer.dataset.previousKeyType = 'delete'

            } else if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'exp') {
                // keyContent.classList.add('.is-depressed');
                btnContainer.dataset.previousKeyType = 'operator'

                firstValue = result.textContent;
                console.log(firstValue)

                displayedInput = firstValue;

                input.textContent = displayedInput + keyContent;
                result.textContent = ''
                displayedResult = result.textContent;

                btnContainer.dataset.operator = action;
            }
       }
    })  
})
        






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
