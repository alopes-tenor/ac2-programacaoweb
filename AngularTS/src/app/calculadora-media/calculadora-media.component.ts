import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})
export class CalculadoraMediaComponent {
  ac1: number;
  ac2: number;
  ag: number;
  af: number;

  calcular() {
    let ac1 = this.ac1 ? this.ac1 : 0;
    let ac2 = this.ac2 ? this.ac2 : 0;
    let ag = this.ag ? this.ag : 0;
    let af = this.af ? this.af : 0;

    let mediaFinal = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);

    if (mediaFinal >= 5) {
      alert("Aprovado! A média final é: " + mediaFinal);
    } else {
      alert("Reprovado! A média final é: " + mediaFinal);
    }
  }
}
