import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resDisplay: string;
  operand1: string;
  operand2: string;
  operator: string;
  firstOperandEntered: boolean;

  constructor() {
    this.resDisplay = '';
    this.operand1 = '';
    this.operand2 = '';
    this.operator = '';
    this.firstOperandEntered = false;
  }

  appendDigit(digit: string): void {
    this.resDisplay += digit;
    if (this.firstOperandEntered) {
      this.operand2 += digit;
    }
  }

  clear(): void {
    this.resDisplay = '';
    this.operand1 = '';
    this.operand2 = '';
    this.operator = '';
    this.firstOperandEntered = false;
  }

  appendOperator(operator: string): void {
    this.operand1 = this.resDisplay;
    this.operator = operator;
    this.resDisplay += operator;
    this.firstOperandEntered = true;
  }

  evaluate(): void {
    const op1 = Number.parseInt(this.operand1, 2);
    const op2 = Number.parseInt(this.operand2, 2);
    let result: number;
    switch (this.operator) {
      case '+':
        result = op1 + op2;
        break;
      case '-':
        result = op1 - op2;
        break;
      case '*':
        result = op1 * op2;
        break;
      case '/':
        result = op1 / op2;
        break;
    }
    this.clear();
    this.resDisplay = result.toString(2);
  }
}
