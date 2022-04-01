class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperandText = previousOperand;
        this.currentOperandText = currentOperand;
        this.allClear();
    }

    
    allClear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.previousOperandText.innerText = '';
        this.currentOperandText.innerText = '';
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`
        } else{
            this.previousOperandText.innerText = '';
        }
            
    }

    clearentry() {
        this.currentOperand = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendValue(number) {
        if(number == '.' && this.currentOperand.includes(".")){
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    operator(operator){
        if(this.currentOperand == ''){
            return;
        }
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let result;
        let previousValue = parseFloat(this.previousOperand);
        let currentValue = parseFloat(this.currentOperand);
        if(isNaN(previousValue) || isNaN(currentValue)){
            return;
        }
        switch(this.operation){
            case "+":
                result = previousValue + currentValue;
                break;
            case '-':
                result = previousValue - currentValue;
                break;
            case '*':
                result = previousValue * currentValue;
                break;
            case '/':
                result = previousValue / currentValue;
                break;
            case '%':
                result = (previousValue/100) * currentValue;
                break;
            case '√':
                result = Math.sqrt(previousValue);
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = ''
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearentryButton = document.querySelector('[data-clear-entry]')
const allclearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

//Extra functions


const calculator = new Calculator (previousOperandText, currentOperandText)

numberButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        calculator.appendValue(button.innerText)
        calculator.updateDisplay()
    })
})

allclearButton.addEventListener('click', function() {
    calculator.allClear()
    calculator.updateDisplay()
})

clearentryButton.addEventListener('click', function() {
    calculator.clearentry()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', function() {
    calculator.delete()
    calculator.updateDisplay()
})

operatorButtons.forEach(function (button){
    button.addEventListener('click', function(){
        calculator.operator(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', function() {
    calculator.compute();
    calculator.updateDisplay();
})

