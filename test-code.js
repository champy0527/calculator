let input = document.getElementById('input');
let result = document.getElementById('result')

let firstValue;
let secondValue
let tempArr;

const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.btnContainer');



//store number
const storeNum = num => {
    let newArr = [];

    if (newArr.length > 5) {
        return
    } else {
        newArr.push(num);
    }

    return newArr.toString()
}


btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const btnKey = e.target.dataset.value;
        
        //store numbers
        if (btnKey >= 0 && btnKey <= 9 || btnKey === '.') {
            storeNum(btnKey)
    
            let secondValue
            result.textContent = secondValue;
            
        }

    })
})