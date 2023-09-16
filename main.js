let input = document.getElementById('input');
let result = document.getElementById('result');

const btns = document.querySelectorAll('button');
const clear = document.querySelector('clear');
const equals = document.querySelector('equal');


//clear screen
const clearScreen = () => {
    input.textContent= '';
    result.textContent='';
    equation = 0;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

let equation = '';
let answer = '';

let firstOperand;
let secondOperand;


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === 'clear') {
            return clearScreen()
        } else if (btn.value ==='del') {
            equation = equation.slice(0, -1);
            input.textContent = equation;
        } else if (btn.value >= 0 && btn.value <=9 || btn.value==='.')  {
            equation += btn.value;
            console.log(typeof equation);
            input.textContent = equation;
            firstOperand = Number(equation)
            console.log(typeof firstOperand);
            console.log(firstOperand)
        }
        
        
        // else {
        //     equation.
        //     equation += btn.value;
        //     input.textContent = equation;
        // }
        
    })
})
