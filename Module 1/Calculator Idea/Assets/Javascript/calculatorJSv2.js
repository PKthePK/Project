class Calculator{
    constructor(previousValue, currentValue){
        this.previousValueOutput = previousValue;
        this.currentValueOutput = currentValue;
        this.allClear();
    }

    allClear(){
        this.currentValue = '';
        this.previousValue = '';
        this.operation = undefined;
        this.previousValueOutput.innerText = '';
        this.currentValueOutput.innerText = '';
    }

    clearEntry(){
        this.currentValue = '';
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
    }

    updateDisplay(){
        this.currentValueOutput.innerText = this.currentValue;
        // this.previousValueOutput.innerText = this.currentValue;
        // this.currentValueOutput.innerText = this.previousValueOutput.innerText;
        if(this.operation != null){
            // console.log("previousValueOutput.innerText: ")
            this.previousValueOutput.innerText = `${this.previousValue} ${this.operation} ${this.currentValue}`
            // this.previousValueOutput.innerText = `${this.previousValue} ${this.operation} `
        }
    }

    appendValue(number){
        if(number == '.' && this.currentValue.includes('.')){
            return;
        }
        this.currentValue = this.currentValue.toString() + number.toString()
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
        this.currentValue = ''
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
        let result = Math.sqrt(this.currentValue);
        this.currentValue = result;
    }

    reciprocal(){
        let result = 1/(this.currentValue);
        this.currentValue = result
    }

    factorial(){
        let result = 1;
        for(let i = 1; i <= this.currentValue; i++){
            result = result * i;
        }
        this.currentValue = result;
    }

    cuberoot(){
        let result = Math.cbrt(this.currentValue);
        this.currentValue = result;
    }

    tenpower(){
        let result = Math.pow(10,this.currentValue);
        this.currentValue = result;
    }

    xsquared(){
        let result = Math.pow(this.currentValue, 2)
        this.currentValue = result;
    }

    xcubed(){
        let result = Math.pow(this.currentValue, 3)
        this.currentValue = result;
    }

    logten(){
        let result = Math.log10(this.currentValue);
        this.currentValue = result;
    }

    ln(){
        let result = Math.log(this.currentValue);
        this.currentValue = result;
    }

    sin(){
        let result = Math.sin(this.currentValue);
        this.currentValue = result;
    }

    cos(){
        let result = Math.cos(this.currentValue);
        this.currentValue = result;
    }

    tan(){
        let result = Math.tan(this.currentValue);
        this.currentValue = result;
    }
}

// Basic functions
const previousValueOutput = document.querySelector('[data-previous-operand]');
const currentValueOutput = document.querySelector('[data-current-operand]')
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

const xpoweryButton = document.querySelector('[data-x-powered-y]')
const xrootyButton = document.querySelector('[data-x-root-y]')

//Instantiation
const calculator = new Calculator(previousValueOutput, currentValueOutput)

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