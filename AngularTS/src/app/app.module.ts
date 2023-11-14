import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { ListarComponentesComponent } from './listar-componentes/listar-componentes.component';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraMediaComponent,
    ListarComponentesComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CardModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
