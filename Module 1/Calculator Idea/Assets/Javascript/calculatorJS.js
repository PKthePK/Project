class Calculator{
    constructor(historyValue, previousValue, currentValue, memoryValue){
        this.historyValueOutput = historyValue;
        this.previousValueOutput = previousValue;
        this.currentValueOutput = currentValue;
        this.memoryValueOutput = memoryValue;
        this.allClear()
    }

    appendValue(number){
        if(number == '.' && this.currentValue.toString().includes('.')){
            return;
        }
        // if(this.currentValue.toString().indexOf('.') == 0){
        //     this.currentValue = "testing";
        // }
        this.currentValue = this.currentValue.toString() + number.toString();
        // this.currentValueOutput.innerText = this.currentValue
    }

    allClear(){
        this.historyValue = '';
        this.previousValue = '';
        this.currentValue = '';
        this.memoryValue = 0;
        this.currentOperator = undefined;
        this.previousOperator = undefined;
        this.ext = undefined;
        // this.historyValueOutput.innerText = this.historyValue;
        // this.previousValueOutput.innerText = this.previousValue;
        // this.currentValueOutput.innerText = this.currentValue;
        // this.memoryValueOutput.innerText = this.memoryValue;
    }

    operators(operater){
        if(this.previousOperator != this.currentOperator){
            this.currentOperator = operater;
        }
        if(this.currentValue == ''|| this.currentValue =='.'){
            return;
        }
        if(this.previousValue != ''){
            this.calculate();
        }
        this.currentOperator = operater;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    updateDisplay(){
        this.historyValueOutput.innerText = this.historyValue;
        this.previousValueOutput.innerText = this.previousValue;
        this.currentValueOutput.innerText = this.currentValue;
        this.memoryValueOutput.innerText = this.memoryValue;
        if(this.currentOperator != null){
            this.previousValueOutput.innerText = `${this.previousValue} ${this.currentOperator} ${this.currentValue}`;
        }
    }

    clearEntry(){
        this.currentValue = '';
        this.historyValue = '';
    }

    delete(){
        if(!isNaN(this.currentValue)){
            if(this.currentValue == Infinity){
                this.currentValue = '';
            } else{
                this.currentValue = this.currentValue.toString().slice(0,-1);
            }
        }
        if(this.currentValue == NaN || this.currentValue == undefined){
            this.currentValue = '';
        }
    }

    calculate(){
        let result;
        let firstValue = parseFloat(this.previousValue);
        let secondValue = parseFloat(this.currentValue);
        if(isNaN(firstValue) || isNaN(secondValue)){
            return;
        }
        switch(this.currentOperator){
            case "+":
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue
                break;
            case '%':
                result = (firstValue/100) * secondValue;
                break;
            case '^':
                result = Math.pow(firstValue, secondValue);
                break;
            case 'Modulo':
                result = firstValue % secondValue;
                break
            case '???':
                result = Math.pow(firstValue, 1/secondValue);
                break
            default:
                // if(this.currentOperator == 'y???x'){
                //     result = Math.pow(firstValue, 1/secondValue)
                //     // this.currentOperator = "???"
                // } else{
                    console.log('calculate() Switch error');
                    return undefined;
                // }

        }
        this.currentValue = result;
        this.historyValue = this.previousValueOutput.innerText;
        this.previousValue = '';
        this.currentOperator = undefined;
    }

    //Extra functions
    extra(ext){
        if(this.currentValue == '' && !isNaN(this.currentValue)){return};
        this.ext = ext;
        let result;
        let firstValue = parseFloat(this.previousValue);
        let secondValue = parseFloat(this.currentValue);

        switch(this.ext){
            case '1???x':
                result = 1/secondValue;
                this.historyValue = `reciprocal(${secondValue})`;
                break;
            case "x!":
                result = 1;
                if(secondValue == 0 || secondValue == 1){
                    return;
                } else{
                    if(Number.isInteger(secondValue)){
                        if(secondValue < 0){
                            result = undefined;
                        }
                        for(let i = 1; i <= secondValue; i++){
                            result = result * i;
                        }
                    } else{
                        var g = 7;
                        var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716 * Math.pow(10, -6), 1.5056327351493116 * Math.pow(10, -7)];
                        
                        function gamma(z) {
                            if (z < 0.5) {
                                return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
                            } else {
                                z -= 1;
                                var x = C[0];
                                for (var i = 1; i < g + 2; i++)
                                x += C[i] / (z + i);
                                var t = z + g + 0.5;
                                return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
                            }
                        }
                        result = gamma(secondValue+1);
                    }
                }
                this.historyValue = `${secondValue}!`
                break;
            case "2???x":
                result = Math.sqrt(secondValue);
                this.historyValue = `squareroot(${secondValue})`
                break;
            case "3???x":
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
            default:
                console.log('extra() Switch error');
                return;
        }
        this.currentValue = result;
        this.ext = ''
    }
    
    pi(){
        let result = Math.PI;
        this.currentValue = result;
    }

    euler(){
        let result = Math.E;
        this.currentValue = result;
    }

    invert(){
        if(this.currentValue == '' || isNaN(this.currentValue)){
            return;
        }
        let result = -1*this.currentValue;
        this.currentValue = result;
    }

    memory(memory){
        this.mem = memory;
        if(this.mem == "MR"){
            if(this.memoryValue != ''){
                console.log('MR')
                this.currentValue = parseFloat(this.memoryValue);
                console.log(this.currentValue)
            }
        } else if(this.mem == "MC"){
            this.memoryValue = 0;
        }
        if(this.currentValue == '' || isNaN(this.currentValue)){
            return;
        }
        console.log('memory()')
        switch(this.mem){
            // case 'MC':
            //     console.log('MC')
            //     this.memoryValue = 0;
            //     break;
            // case 'MR':
            //     console.log('MR')
            //     this.currentValue = parseFloat(this.memoryValue);
            //     console.log(this.currentValue)
            //     break;
            case 'MS':
                console.log('MS')
                this.memoryValue = parseFloat(this.currentValue);
                console.log(memoryValue)
                break;
            case 'M+':
                console.log('M+')
                this.memoryValue = parseFloat(this.memoryValue) + parseFloat(this.currentValue);
                break;
            case 'M-':
                console.log('M-')
                this.memoryValue = parseFloat(this.memoryValue) - parseFloat(this.currentValue);
                break;
            default:
                return;
        }
        this.memoryValueOutput.innerText = this.memoryValue;
    }
}

//Outout values
const historyValueOutput = document.querySelector('[data-history-operand]');
const previousValueOutput = document.querySelector('[data-previous-operand]');
const currentValueOutput = document.querySelector('[data-current-operand]');
const memoryValueOutput = document.querySelector('[data-result-operand]');


//Instantiation
let calculator = new Calculator(historyValueOutput, previousValueOutput, currentValueOutput, memoryValueOutput);

//Basic functions
const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operator]')

const allClearButton = document.querySelector('[data-all-clear]')
const clearEntryButton = document.querySelector('[data-clear-entry]')
const deleteButton = document.querySelector('[data-delete]')

const equalsButton = document.querySelector('[data-equals]')

//Extra functions
const extraButtons = document.querySelectorAll('[data-extra]')
const piButton = document.querySelector('[data-pi]')
const invertButton = document.querySelector('[data-plus-minus]')
const eulerButton = document.querySelector('[data-euler]')
const memoryButtons = document.querySelectorAll('[data-memory]')

//Basic functions Buttons
numberButtons.forEach(function(button){
    button.addEventListener('click',function(){
        calculator.appendValue(button.innerText);
        calculator.updateDisplay();
    })
})

allClearButton.addEventListener('click', function(){
    calculator.allClear();
    calculator.updateDisplay();
})

operatorButtons.forEach(function(button){
    button.addEventListener('click', function(){
        calculator.operators(button.innerText);
        calculator.updateDisplay();
    })
})

clearEntryButton.addEventListener('click', function(){
    calculator.clearEntry();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',function(){
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click',function(){
    calculator.calculate()
    calculator.updateDisplay();
})

piButton.addEventListener('click',function(){
    calculator.pi();
    calculator.updateDisplay();
})

eulerButton.addEventListener('click', function(){
    calculator.euler();
    calculator.updateDisplay();
})

extraButtons.forEach(function(button){
    button.addEventListener('click',function(){
        calculator.extra(button.innerText);
        calculator.updateDisplay()
    })
})

invertButton.addEventListener('click', function(){
    calculator.invert()
    calculator.updateDisplay();
})

memoryButtons.forEach(function(button){
    console.log('memoryButtons')
    button.addEventListener('click',function(){
        calculator.memory(button.innerText);
        calculator.updateDisplay();
    })
})

//Keyboard keypress
window.addEventListener('keydown', function(e){
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