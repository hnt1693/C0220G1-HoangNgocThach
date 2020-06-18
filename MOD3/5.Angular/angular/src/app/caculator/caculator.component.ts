import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number;
  number2: number;
  operator: string;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  cal(operator: string) {
    switch (operator) {
      case '+':
        this.result = this.number1 + this.number2;
        console.log(this.result);
        break;
        case '-':
        this.result = this.number1 - this.number2;
        console.log(this.result);
        break;
        case '*':
        this.result = this.number1 * this.number2;
        console.log(this.result);
        break;
      case '/':
        this.result = this.number1 / this.number2;
        console.log(this.result);
        break;
    }
  }

  action() {
    this.result = this.number1 + this.number2;
    console.log(this.number1);
    console.log(this.result);
  }

  onFirstChange(value: number) {
    this.number1 = Number(value);
  }

  onSecondChange(value: number) {
    this.number2 = Number(value);
  }
}
