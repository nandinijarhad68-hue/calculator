
/**
 * Modern Glassmorphism Calculator Script
 */
class Calculator {
    constructor(mainDisplay, expressionDisplay) {
        this.mainDisplay = mainDisplay;
        this.expressionDisplay = expressionDisplay;
        this.clear();
        this.history = [];
    }
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.lastOperation = undefined;
        this.lastRightOperand = undefined;
        this.updateDisplay();
    }
    delete() {
        if (this.shouldResetScreen) return;
        if (this.currentOperand === 'Error' || this.currentOperand === 'Cannot divide by 0') {
            this.clear();
            return;
        }
        if (this.currentOperand.length === 1 || (this.currentOperand.length === 2 && this.currentOperand.startsWith('-'))) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
        this.updateDisplay();
    }
    appendNumber(number) {
        if (this.currentOperand === 'Error' || this.currentOperand === 'Cannot divide by 0') {
            this.currentOperand = '0';