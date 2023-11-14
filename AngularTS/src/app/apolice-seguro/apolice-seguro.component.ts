import { Component } from '@angular/core';
import {Apolice} from "../../models/apolice";

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  apolice: Apolice = {
    nomeSegurado: '',
    sexo: 'masculino',
    idade: 0,
    valorAutomovel: 0
  };

  valorApolice: number | undefined;

  calcularApolice() {
    const { sexo, idade, valorAutomovel } = this.apolice;

    if (sexo === 'masculino') {
      if (idade <= 25) {
        this.valorApolice = 0.15 * valorAutomovel;
      } else {
        this.valorApolice = 0.10 * valorAutomovel;
      }
    } else {
      // Sexo feminino
      this.valorApolice = 0.08 * valorAutomovel;
    }


  }
}
