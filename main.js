let input = document.getElementById('input');
let result = document.getElementById('result');

const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.btnContainer')

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const btn = e.target;
            const action = btn.dataset.action
            const btnContent = btn.textContent;
            let displayedInput = input.textContent;
            let displayedResult = result.textContent;
                        
            let firstValue;
            let operator = btnContainer.dataset.operator;
            let secondValue;

            let previousBtnType = btnContainer.dataset.previousBtnType

            if (action === 'clear') {
                input.textContent = '';
                result.textContent = '';
                btnContainer.dataset.previousBtnType = 'clear'

            } else if (action === 'delete') {
                result.textContent = result.textContent.slice(0,-1);
                btnContainer.dataset.previousBtnType = 'delete';
            }

            //log the numbers. i.e. if no action, they're numbers
            if (!action) {
                if (!displayedInput) {

                    result.textContent += btnContent;
                    btnContainer.dataset.previousBtnType = 'number';

                } else if (previousBtnType === 'operator' || previousBtnType === 'number' || previousBtnType === 'decimal' ||previousBtnType === 'equals') {
                    
                    result.textContent += btnContent;
                    btnContainer.dataset.previousBtnType = 'number';
                    
                } 

            //decimal
            } else if (action === 'decimal' && !displayedResult) {
                result.textContent = '0.'
                btnContainer.dataset.previousBtnType = 'decimal'
                
            } else if (action === 'decimal' && !displayedResult.includes('.')) {
                result.textContent += btnContent;   
                btnContainer.dataset.previousBtnType = 'decimal'
            
            //operator    
            } else if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'exp') {

                if (displayedResult && !displayedInput || previousBtnType === 'equals') {
                    btnContainer.dataset.previousBtnType = 'operator';

                    input.textContent = result.textContent + btnContent;
                    result.textContent = '';
                    
                    secondValue = result.textContent
                    
                    btnContainer.dataset.operator = action;
                    operator = btnContainer.dataset.operator;
                    
                } else if (displayedResult && displayedInput ) {

                    firstValue = displayedInput.slice(0,-1);
                    secondValue = displayedResult;

                    input.textContent += secondValue;

                    input.textContent = calculate(firstValue, operator, secondValue) + btnContent;
                    result.textContent = '';
                
                    btnContainer.dataset.operator = action;
                    operator = btnContainer.dataset.operator;
                }     
            }

            if (action === 'sqrt') {
                
                secondValue = result.textContent;
                input.textContent = '√' + secondValue;
                
                result.textContent = '';
                btnContainer.dataset.previousBtnType = 'sqrt';
            }

            if (action === 'equals') {
                
                if (displayedInput.includes('√')) {
                
                    displayedInput = Number(input.textContent.substring(1))

                    result.textContent = Math.sqrt(displayedInput);
                    input.textContent = '';
                    btnContainer.dataset.previousBtnType = 'equals';
    
                } else {
                    // console.log(`input display is: ${displayedInput}`)
                    firstValue = displayedInput.slice(0,-1);
                    secondValue = result.textContent;

                    // console.log(`First Value: ${firstValue}`)
                    // console.log(`Operator: ${operator}`)
                    // console.log(`Second Value: ${secondValue}`)

                    input.textContent += secondValue
                    
                    result.textContent = calculate(firstValue, operator, secondValue)
                    btnContainer.dataset.previousBtnType = 'equals';
                }
            }
       }
    })  
})
        

const calculate = (num1, operator, num2) => {
    let result = 0;
    if (operator === 'add') {
        result = Number(num1) + Number(num2);
        return result
    } else if (operator === 'subtract') {
        result = Number(num1) - Number(num2);
        return result
    } else if (operator === 'multiply') {
        result = Number(num1) * Number(num2);
        return result
    } else if (operator === 'divide') {
        result = Number(num1) / Number(num2);
        return result
    } else if (operator === 'exp') {
        result = Number(num1) ** Number(num2);
        return result
    }
}

// //FIX THIS!! LIMIT RESULT DECIMAL PLACES
// const limitDigits = num => {
//     let str = String(num);
//     if (str.length > 12) {
//         if (str.includes('.')) {
//             let separated = str.split('.')
//         }

//     }
// }

// console.log(calculate('1', 'exp', 2))

