class Calculator{
    constructor(previousValue, currentValue, historyValue, resultValue){
        this.previousValueOutput = previousValue;
        this.currentValueOutput = currentValue;
        this.historyValueOutput = historyValue;
        this.resultValueOutput = resultValue;
        this.allClear();
    }

    appendValue(number){
        if(number == '.' && this.currentValue.includes('.')){
            return;
        }
        this.currentValue = this.currentValue.toString() + number.toString()
    }

    allClear(){
        this.historyValue = '';
        this.previousValue = '';
        this.currentValue = '';
        this.resultValue = '';
        this.operation = undefined;
        this.historyValueOutput.innerText = this.historyValue;
        this.previousValueOutput.innerText = this.previousValue;
        this.currentValueOutput.innerText = this.currentValue;
        this.resultValueOutput.innerText = this.resultValue;
    }

    clearEntry(){
        this.currentValue = '';
        // this.previousValue = '';
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
    }

    updateDisplay(){
        // this.previousValueOutput.innerText = this.currentValue;
        this.currentValueOutput.innerText = this.currentValue;
        // this.previousValueOutput.innerText = this.previousValue;
        if(this.operation != null){
            // console.log("previousValueOutput.innerText: ")
            // this.previousValueOutput.innerText = `${this.previousValue} ${this.operation} ${this.currentValue}`
            this.previousValueOutput.innerText = `${this.previousValue} ${this.operation} `
        }
        else 
            {this.previousValueOutput.innerText = ''
        }
        // this.historyValueOutput.innerText = this.historyValue;
    }




    test(){
        if(this.previousValueOutput.innerText == ''){
            return;
        }
        this.historyValue = this.historyValue.toString() + this.previousValue.toString();
        console.log(this.historyValue)
        console.log("test()")

        if(this.operation !=null){
            this.historValue = this.historyValue.toString() + this.operation.toString();
        }
        this.historyValueOutput.innerText = this.historyValue;
    }
    

    operator(operator){
        if(this.currentValue == ''){
            return;
        }
        if(this.previousValue != ''){
            this.calculate();
        }
        // console.log(this.currentValue)
        this.operation = operator;
        this.previousValue = this.currentValue;
        this.currentValue = '';
        // console.log(this.previousValue)
    }

    calculate(){
        let result;
        let firstValue = parseFloat(this.previousValue);
        let secondValue = parseFloat(this.currentValue);
        // console.log('result: ',result);
        // console.log('firstValue: ',firstValue);
        // console.log('secondValue: ',secondValue);
        if(this.previousValue == '' || isNaN(secondValue)){
            return;
        }

        switch(this.operation){
            case "+":
                result = firstValue + secondValue;
                break;
            case "-":
                result = firstValue - secondValue;
                break;
            case "*":
                result = firstValue * secondValue;
                break;
            case "/":
                result = firstValue / secondValue;
                break;
            case "%":
                result = (firstValue/100) * secondValue;
                break;
            default:
                return;
        }
        this.currentValue = result;
        this.previousValue = '';
        this.operation = undefined;
        console.log('currentValue: ', this.currentValue);

    }

    //Extra
    squareroot(){
        if(this.currentValue == ''){ return}
        let result = Math.sqrt(this.currentValue);
        this.currentValue = result;
    }

    reciprocal(){
        if(this.currentValue == ''){ return}
        let result = 1/(this.currentValue);
        this.currentValue = result
    }

    factorial(){
        if(this.currentValue == ''){ return}
        let result = 1;
        for(let i = 1; i <= this.currentValue; i++){
            result = result * i;
        }
        this.currentValue = result;
    }

    cuberoot(){
        if(this.currentValue == ''){ return}
        let result = Math.cbrt(this.currentValue);
        this.currentValue = result;
    }

    tenpower(){
        if(this.currentValue == ''){ return}
        let result = Math.pow(10,this.currentValue);
        this.currentValue = result;
    }

    xsquared(){
        if(this.currentValue == ''){ return}
        let result = Math.pow(this.currentValue, 2)
        this.currentValue = result;
    }

    xcubed(){
        if(this.currentValue == ''){ return}
        let result = Math.pow(this.currentValue, 3)
        this.currentValue = result;
    }

    logten(){
        if(this.currentValue == ''){ return}
        let result = Math.log10(this.currentValue);
        this.currentValue = result;
    }

    ln(){
        if(this.currentValue == ''){ return}
        let result = Math.log(this.currentValue);
        this.currentValue = result;
    }

    sin(){
        if(this.currentValue == ''){ return}
        let result = Math.sin(this.currentValue);
        this.currentValue = result;
    }

    cos(){
        if(this.currentValue == ''){ return}
        let result = Math.cos(this.currentValue);
        this.currentValue = result;
    }

    tan(){
        if(this.currentValue == ''){ return}
        let result = Math.tan(this.currentValue);
        this.currentValue = result;
    }

    pi(){
        let result = Math.PI;
        this.currentValue = result;
    }
    

}

// Basic functions
const previousValueOutput = document.querySelector('[data-previous-operand]');
const currentValueOutput = document.querySelector('[data-current-operand]')

const historyValueOutput = document.querySelector('[data-history-operand]')
const resultValueOutput = document.querySelector('[data-result-operand]')


const numberButtons = document.querySelectorAll('[data-number]');
const allClearButton = document.querySelector('[data-all-clear]')
const clearEntryButton = document.querySelector('[data-clear-entry]')
const deleteButton = document.querySelector('[data-delete]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')

// Extra functions
const sqrtButton = document.querySelector('[data-sqrt]')
const reciprocalButton = document.querySelector('[data-reciprocal]')
const factorialButton = document.querySelector('[data-factorial')
const cuberootButton = document.querySelector('[data-cubert]')
const tenpowerButton = document.querySelector('[data-tenpower]')
const xsquaredButton = document.querySelector('[data-x-squared]')
const xcubedButton = document.querySelector('[data-x-cubed]')
const logtenButton = document.querySelector('[data-logten]')
const lnButton = document.querySelector('[data-ln]')
const sinButton = document.querySelector('[data-sin]')
const cosButton = document.querySelector('[data-cos]')
const tanButton = document.querySelector('[data-tan]')
const piButton = document.querySelector('[data-pi]')

// const xpoweryButton = document.querySelector('[data-x-powered-y]')
// const xrootyButton = document.querySelector('[data-x-root-y]')

const testButton = document.querySelector('[data-test]')
const memoryPlusButton = document.querySelector('[data-memory-plus]')

//Instantiation
const calculator = new Calculator(previousValueOutput, currentValueOutput, historyValueOutput, resultValueOutput)

// Basic Button functions
allClearButton.addEventListener('click', function(){
    console.log("allClearButton");
    calculator.allClear();
    calculator.updateDisplay();
})

numberButtons.forEach(function (button){
    button.addEventListener('click', function(){
        console.log(button.innerText);
        calculator.appendValue(button.innerText);
        calculator.updateDisplay();
    })
})

clearEntryButton.addEventListener('click',function(){
    console.log('clearEntryButton');
    calculator.clearEntry();
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',function(){
    console.log('deleteButton');
    calculator.delete();
    calculator.updateDisplay()
})

operatorButtons.forEach(function (button){
    button.addEventListener('click', function(){
        console.log(button.innerText);
        calculator.operator(button.innerText);
        // calculator.test()
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', function(){
    console.log('equalsButton');
    calculator.calculate();
    calculator.updateDisplay();
})

//Extra button functions
sqrtButton.addEventListener('click',function(){
    console.log('sqrt');
    calculator.squareroot();
    calculator.updateDisplay();
})

reciprocalButton.addEventListener('click',function(){
    console.log('reciprocal');
    calculator.reciprocal();
    calculator.updateDisplay();
})

factorialButton.addEventListener('click',function(){
    console.log('factorial');
    calculator.factorial();
    calculator.updateDisplay();
})

cuberootButton.addEventListener('click',function(){
    console.log('cuberoot');
    calculator.cuberoot();
    calculator.updateDisplay();
})

tenpowerButton.addEventListener('click',function(){
    console.log('Ten to the power of x');
    calculator.tenpower();
    calculator.updateDisplay();
})

xsquaredButton.addEventListener('click',function(){
    console.log('x squared');
    calculator.xsquared();
    calculator.updateDisplay();
})

xcubedButton.addEventListener('click',function(){
    console.log('x cubed');
    calculator.xcubed();
    calculator.updateDisplay();
})

logtenButton.addEventListener('click',function(){
    console.log('logten');
    calculator.logten();
    calculator.updateDisplay();
})

lnButton.addEventListener('click',function(){
    console.log('ln');
    calculator.ln();
    calculator.updateDisplay();
})

sinButton.addEventListener('click',function(){
    console.log('sin');
    calculator.sin();
    calculator.updateDisplay();
})

cosButton.addEventListener('click',function(){
    console.log('cos');
    calculator.cos();
    calculator.updateDisplay();
})

tanButton.addEventListener('click',function(){
    console.log('tan');
    calculator.tan();
    calculator.updateDisplay();
})

piButton.addEventListener('click',function(){
    console.log('pie');
    calculator.pi();
    calculator.updateDisplay();
})

// testButton.addEventListener('click',function(){
//     console.log('test');
//     calculator.test();
//     calculator.updateDisplay();
// })


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
        calculator.operator(e.key);
    }
    calculator.updateDisplay();
})