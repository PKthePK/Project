class Calculator{
    constructor(historyValue, previousValue, currentValue, resultValue){
        this.historyValueOutput = historyValue;
        this.previousValueOutput = previousValue;
        this.currentValueOutput = currentValue;
        this.resultValueOutput = resultValue;
        this.allClear()
    }

    appendValue(number){
        console.log('appendValue()')
        this.currentValue = this.currentValue.toString() + number.toString();
        // this.currentValueOutput.innerText = this.currentValue
    }

    allClear(){
        console.log('allClear()')
        this.historyValue = '';
        this.previousValue = '';
        this.currentValue = '';
        this.resultValue = '';
        this.operator = undefined;
        this.ext = undefined;
        // this.historyValueOutput.innerText = this.historyValue;
        // this.previousValueOutput.innerText = this.previousValue;
        // this.currentValueOutput.innerText = this.currentValue;
        // this.resultValueOutput.innerText = this.resultValue;
    }

    operators(operater){
        if(this.currentValue == ''){
            return;
        }
        if(this.previousValue != ''){
            this.calculate();
        }
        console.log('operators()')
        this.operator = operater;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    updateDisplay(){
        console.log('updateDiplay()')
        this.historyValueOutput.innerText = this.historyValue;
        this.previousValueOutput.innerText = this.previousValue;
        this.currentValueOutput.innerText = this.currentValue;
        this.resultValueOutput.innerText = this.resultValue;
        // console.log('Operator: ',this.operator)
        if(this.operator != null){
            console.log('updateDisplay()2')
            this.previousValueOutput.innerText = `${this.previousValue} ${this.operator} ${this.currentValue}`
        }
    }

    clearEntry(){
        console.log('clearEntry()')
        this.currentValue = '';
        this.historyValue = ''
    }

    delete(){
        console.log('delete()')
        this.currentValue = this.currentValue.toString().slice(0,-1)
    }

    calculate(){
        if(this.previousValue == '' || this.currentValue == ''){
            return;
        }
        console.log('calculate()');
        let result;
        let firstValue = parseFloat(this.previousValue);
        let secondValue = parseFloat(this.currentValue);

        switch(this.operator){
            case "+":
                console.log(this.operator);
                result = firstValue + secondValue;
                break;
            case '-':
                console.log(this.operator);
                result = firstValue - secondValue;
                break;
            case '*':
                console.log(this.operator);
                result = firstValue * secondValue;
                break;
            case '/':
                console.log(this.operator);
                result = firstValue / secondValue
                break;
            case '%':
                console.log(this.operator);
                result = (firstValue/100) * secondValue
                break;
            case 'xy':
                console.log(this.operator);
                result = Math.pow(firstValue, secondValue)
                break;
            case 'Modulo':
                console.log(this.operator);
                result = firstValue % secondValue;
                break
            case 'y√x':
                console.log(this.operator);
                result = Math.pow(firstValue, 1/secondValue)
                break
            default:
                console.log('calculate() Switch error');
                return;
        }
        this.currentValue = result;
        this.historyValue = this.previousValueOutput.innerText;
        this.previousValue = '';
        this.operator = undefined;
        console.log('previousValue: ',this.previousValue);
        console.log('currentValue: ',this.currentValue);
    }

    //Extra functions
    extra(ext){
        if(this.currentValue == '' && !isNaN(this.currentValue)){return};
        this.ext = ext;
        console.log('extra()');
        let result
        let firstValue = parseFloat(this.previousValue);
        let secondValue = parseFloat(this.currentValue);

        switch(this.ext){
            case '1⁄x':
                result = 1/secondValue;
                this.historyValue = `reciprocal(${secondValue})`
                break;
            case "x!":
                result = 1;
                if(secondValue == 0 || secondValue == 1){
                    return
                } else{
                    for(let i = 1; i <= secondValue; i++){
                        result = result * i;
                    }
                }
                this.historyValue = `${secondValue}!`
                break;
            case "2√x":
                result = Math.sqrt(secondValue);
                this.historyValue = `squareroot(${secondValue})`
                console.log(this.previousValueOutput.innerText)
                break;
            case "3√x":
                result = Math.cbrt(secondValue);
                this.historyValue = `cuberoot(${secondValue})`
                break;
            case "10x":
                result = Math.pow(10,secondValue);
                this.historyValue = `powten(${secondValue})`
                break;
            case "x2":
                result = Math.pow(secondValue,2);
                this.historyValue = `square(${secondValue})`
                break;
            case "x3":
                result = Math.pow(secondValue,3);
                this.historyValue = `cube(${secondValue})`
                break;
            case "log":
                result = Math.log10(secondValue);
                this.historyValue = `log(${secondValue})`
                break;
            case "sin":
                result = Math.sin(secondValue);
                this.historyValue = `sin(${secondValue})`
                break;
            case "cos":
                result = Math.cos(secondValue);
                this.historyValue = `cos(${secondValue})`
                break;
            case "tan":
                result = Math.tan(secondValue);
                this.historyValue = `tan(${secondValue})`
                break;
            case "ln":
                result = Math.log(secondValue);
                this.historyValue = `ln(${secondValue})`
                break;
            case "xy":
                result = Math.pow(firstValue,secondValue);
            default:
                console.log('extra() error');
                return;
        }
        this.currentValue = result;
        this.ext = ''
    }
    
    pi(){
        let result = Math.PI;
        this.currentValue = result;
    }

    invert(){
        console.log('invert()')
        let result = -1*this.currentValue;
        this.currentValue = result;
    }
    
}

//Outout values
const historyValueOutput = document.querySelector('[data-history-operand]');
const previousValueOutput = document.querySelector('[data-previous-operand]');
const currentValueOutput = document.querySelector('[data-current-operand]');
const resultValueOutput = document.querySelector('[data-result-operand]');


//Instantiation
let calculator = new Calculator(historyValueOutput, previousValueOutput, currentValueOutput, resultValueOutput);

//Basic functions
const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operator]')

const allClearButton = document.querySelector('[data-all-clear]')
const clearEntryButton = document.querySelector('[data-clear-entry]')
const deleteButton = document.querySelector('[data-delete]')

const equalsButton = document.querySelector('[data-equals]')

//Extra functions
// const reciprocalButton = document.querySelector('[data-reciprocal]')
const extraButtons = document.querySelectorAll('[data-extra]')
const piButton = document.querySelector('[data-pi]')
const invertButton = document.querySelector('[data-plus-minus]')

//Basic functions Buttons
numberButtons.forEach(function(button){
    button.addEventListener('click',function(){
        console.log(button.innerText);
        calculator.appendValue(button.innerText);
        calculator.updateDisplay();
    })
})

allClearButton.addEventListener('click', function(){
    console.log('allClear');
    calculator.allClear();
    calculator.updateDisplay();
})

operatorButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(button.innerText);
        calculator.operators(button.innerText);
        calculator.updateDisplay();
    })
})

clearEntryButton.addEventListener('click', function(){
    console.log('clearEntry');
    calculator.clearEntry();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',function(){
    console.log('delete');
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click',function(){
    console.log('equals');
    calculator.calculate()
    calculator.updateDisplay();
})

piButton.addEventListener('click',function(){
    console.log('pie');
    calculator.pi();
    calculator.updateDisplay();
})


extraButtons.forEach(function(button){
    button.addEventListener('click',function(){
        console.log(button.innerText);
        calculator.extra(button.innerText);
        calculator.updateDisplay()
    })
})

invertButton.addEventListener('click', function(){
    console.log('Invert +/-')
    calculator.invert()
    calculator.updateDisplay();
})

//Keyboard keypress
window.addEventListener('keydown', function(e){
    // console.log(e);
    if(e.key === "Escape"){
        calculator.allClear();
    }
    if(e.key === "Backspace" || e.key === "Delete"){
        calculator.delete();
    }
    if(e.key === "Enter" || e.key === "="){
        calculator.calculate();
    }
    if(e.key === "1" || e.key === "2"  || e.key === "3"  || e.key === "4"  || e.key === "5"  || e.key === "6"  || e.key === "7"  || e.key === "8"  || e.key === "9"  || e.key === "0"){
        calculator.appendValue(e.key);
    }
    if(e.key === "+" || e.key === "-"  || e.key === "*" || e.key === "/"  || e.key === "%"){
        calculator.operators(e.key);
    }
    calculator.updateDisplay();
})