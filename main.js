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
            // let displayedResult = result.textContent;
            
            let firstValue = btnContainer.dataset.firstValue;
            let operator = btnContainer.dataset.operator;
            let secondValue;

            let previousBtnType = btnContainer.dataset.previousBtnType

            if (action === 'clear') {
                input.textContent = '';
                result.textContent = '';
                btnContainer.dataset.previousBtnType = 'clear'

            } else if (action === 'delete') {
                input.textContent = input.textContent.slice(0,-1);
                btnContainer.dataset.previousBtnType = 'delete'

            }

            //log the numbers. i.e. if no action, they're numbers
            if (!action) {
                if (!displayedInput) {
                    result.textContent += btnContent;
                    btnContainer.dataset.previousBtnType = 'number';
                    firstValue = result.textContent;

                } else if (previousBtnType === 'operator' || previousBtnType === 'number') {
                    
                    
                    result.textContent += btnContent;
                    firstValue = result.textContent;
                    // displayedResult = result.textContent;

                    btnContainer.dataset.previousBtnType = 'number'
                    
                } 

            //decimal
            } else if (action === 'decimal' && !displayedInput) {
                result.textContent = '0.'
                btnContainer.dataset.previousBtnType = 'decimal'
                
            } else if (action === 'decimal' && !displayedInput.includes('.')) {
                result.textContent += btnContent;          

            //operator    
            } else if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'exp') {
                
                btnContainer.dataset.previousBtnType = 'operator';

                input.textContent = result.textContent + btnContent;
                result.textContent = '';
                
                secondValue = result.textContent
                
                btnContainer.dataset.operator = action;
                operator = btnContainer.dataset.operator;
                
                
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
    
                } else {
                    // console.log(`input display is: ${displayedInput}`)
                    firstValue = displayedInput.slice(0,-1);
                    secondValue = result.textContent;


                    // console.log(`First Value: ${firstValue}`)
                    // console.log(`Operator: ${operator}`)
                    // console.log(`Second Value: ${secondValue}`)


                    input.textContent += secondValue
                    
                    result.textContent = calculate(firstValue, operator, secondValue)
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

console.log(calculate('1', 'exp', 2))

