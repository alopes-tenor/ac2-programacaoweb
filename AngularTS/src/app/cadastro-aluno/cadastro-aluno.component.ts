import { Component } from '@angular/core';
import {Aluno} from "../../models/aluno";

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  aluno: Aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };

  onSubmit(form: any) {
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado:', this.aluno);

    const alertMessage = `
      RA: ${this.aluno.ra}
      Nome: ${this.aluno.nome}
      Email: ${this.aluno.email}
      Celular: ${this.aluno.celular}
    `;

    alert(`Cadastro realizado com sucesso!\n\n${alertMessage}`);
  }
}
