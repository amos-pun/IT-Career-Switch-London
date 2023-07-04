class Calculator {
    
    constructor (previousOperandTextELement, currentOperandTextElement) {
        this.previousOperandTextELement = previousOperandTextELement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    } 

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString()

}

chooseOperation(operation){
    if (this.currentOperand === '' ) return
    if(this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute() {
    let computation
    //parseFLoat is changing the string into NUmber.
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    //NaN stand for Not a Number
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+' :
            computation = prev + current
            break
        case '-' :
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '/':
            computation = prev / current
            break
        default:
            return
    }
    this.previousOperandTextELement.innerText = this.currentOperand.toString()+this.operation.toString()+this.currentOperand.toString()

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}

getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
    }
    if (decimalDigits != null ){
        return `${integerDisplay}.${decimalDigits}`
    } else { 
        return integerDisplay 
    }
}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    if( this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.currentOperand)} ${this.operation}`
    }  else {
        this.previousOperandTextELement.innerText = ''
    }
}

}

//this is to denote the HTML buttons into JS. it is like a translator from HTML to JS.
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextELement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previousOperandTextELement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})