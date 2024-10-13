// Constants
const buttons = document.querySelectorAll(".button")

const displayElement = document.querySelector(".display")

let firstValue = 0
let secondValue = 0
let operator = null
let currentNumber = ""

// Variables

// Cached Element References
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelectorAll(".equals")

// Functions
const updateDisplay = (value) => {
  displayElement.textContent = value
}

updateDisplay("0")

const clearCalculator = () => {
  firstValue = 0
  secondValue = 0
  operator = null
  currentNumber = ""
  updateDisplay("0")
}

const performCalculation = () => {
  if (firstValue !== null && operator !== null && currentNumber !== "") {
    secondValue = currentNumber

    let result = 0

    if (operator === "+") {
      result = firstValue + secondValue
    } else if (operator === "-") {
      result = firstValue - secondValue
    } else if (operator === "*") {
      result = firstValue * secondValue
    } else if (operator === "/") {
      result = firstValue / secondValue
    }

    updateDisplay(result)
    firstValue = result
    currentNumber = ""
    operator = null
  }
}

// Event Listeners

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText

    if (value === "C") {
      clearCalculator()
    } else if (value === "+") {
      operator = "+"
      firstValue = currentNumber
      currentNumber = ""
    } else if (value === "-") {
      operator = "-"
      firstValue = currentNumber
      currentNumber = ""
    } else if (value === "*") {
      operator = "*"
      firstValue = currentNumber
      currentNumber = ""
    } else if (value === "/") {
      operator = "/"
      firstValue = currentNumber
      currentNumber = ""
    } else if (value === "=") {
      secondValue = currentNumber
      performCalculation()
    } else {
      currentNumber += value
      displayElement.textContent = currentNumber
    }
  })
})
