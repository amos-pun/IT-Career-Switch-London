class Calculator {
    
    constructor (previousOperandTextELement, currentOperandTextElement) {

        //log to debug
        console.log(previousOperandTextELement);
        console.log(currentOperandTextElement);
        //this code above print the whole html element

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
    
    //test log
    console.log(this.previousOperand);
    console.log(this.operation)
    console.log(this.currentOperand)
    console.log("---------------")
    //end log
    //update top screen working solution edit
    this.previousOperandTextELement.innerText = this.previousOperand
    
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''

}

updateDisplay() {
    
        if (this.currentOperandTextElement.innerText = this.currentOperand) return
        this.previousOperandTextElement.innerText = this.previousOperand

        //the line below is not necessary and is buggy
        // this.previousOperandTextElement.innerText = this.previousOperand
    
}

}

//this is to denote the HTML buttons into JS. it is like a translator from HTML to JS.
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextELement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand')

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