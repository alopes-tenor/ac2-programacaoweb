import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number;
  num2: number;
  resultado: number;
  operacao: string;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divisao':
        if (this.num2 !== 0) {
          this.resultado = this.num1 / this.num2;
        } else {
          this.resultado = 0;
        }
        break;
      default:
        this.resultado = 0;
    }
  }
}
