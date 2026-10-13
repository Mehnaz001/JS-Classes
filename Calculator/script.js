const display = document.getElementById('display')
const buttons = document.querySelector('.buttons')
let first  = ''
let second = ''
let operator;

// buttons.addEventListener('click', function(event){
//     const value = event.target.textContent

//     if(value === 'AC') {
//         display.value = ''
//     }
//     else if (value === '=') {
//         const expression = display.value


//     }
// })

function appendValue(value) {
    if(value == '+' || value == '-'|| value=='*' ||value=='/') {
        operator = value;
        display.value += value;
        console.log("operator", operator)
    } else if (!operator) {
        first += value;
        display.value += value;
        console.log('first',first)
    } else {
        second += value;
        display.value += value;
        console.log('second',second)
    }
}

function clearDisplay() {
    display.value = ''
    first = ''
    second = ''
    operator = ''
}

function calculate() {
    let result;
    if(operator == '+') {
        result = Number(first) + Number(second)
    } else if (operator == '-') {
         result = Number(first) - Number(second)
    }else if (operator == '*') {
         result = Number(first) * Number(second)
    } else if (operator == '/') {
         result = Number(first) / Number(second)
    }

    display.value = result;
    first = result;
    second = ''
    operator = ''
}