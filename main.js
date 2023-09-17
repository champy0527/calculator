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

            if (action === 'clear') {
                input.textContent = '';
                result.textContent = '';
                btnContainer.dataset.previousKeyType = 'clear'

            } else if (action === 'delete') {
                input.textContent = input.textContent.slice(0,-1);
                btnContainer.dataset.previousKeyType = 'delete'

            }

            //log the numbers. i.e. if no action, they're numbers
            if (!action) {
                if (!displayedInput) {
                    result.textContent += keyContent;
                    btnContainer.dataset.previousKeyType = 'number';

                } else if (previousKeyType === 'operator' || previousKeyType === 'number') {
                    
                    firstValue = firstValue;
                    result.textContent += keyContent;
                    
                    displayedResult = result.textContent;

                    btnContainer.dataset.previousKeyType = 'number'

                    
                } 

            } else if (action === 'decimal' && !displayedInput) {
                input.textContent = '0.'
                btnContainer.dataset.previousKeyType = 'decimal'
            } else if (action === 'decimal' && !displayedInput.includes('.')) {
                input.textContent += keyContent;          

            } else if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'exp') {
                
                btnContainer.dataset.previousKeyType = 'operator'

                displayedInput = result.textContent;

                firstValue = displayedInput

                input.textContent = displayedInput + keyContent;
                
                result.textContent = '';
                displayedResult = result.textContent;
                secondValue = result.textContent
                
                btnContainer.dataset.operator = action;
                operator = btnContainer.dataset.operator;
                
                
            }

            if (action === 'equals') {
                
                secondValue = displayedResult;


                firstValue = parseFloat(firstValue);
                secondValue = parseFloat(secondValue);
                console.log(firstValue)
                console.log(operator)
                console.log(secondValue)

                console.log(typeof firstValue)
                console.log(typeof secondValue)
                
                input.textContent += secondValue
                
                
            }
       }
    })  
})
        

const calculate = (num1, operator, num2) => {
    let result = 0;
    if (operator === 'add') {
        result = num1 + num2;
        return result
    } else if (operator === 'subtract') {
        result = num1 - num2;
        return result
    } else if (operator === 'multiply') {
        result = num1 * num2;
        return result
    } else if (operator === 'divide') {
        result = num1 / num2
        return result
    } else if (operator === 'exp') {
        result = num1 ** num2
        return result
    }
}

console.log(calculate('1', 'divide', 2))

