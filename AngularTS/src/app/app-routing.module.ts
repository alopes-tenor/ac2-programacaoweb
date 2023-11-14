import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraMediaComponent} from "./calculadora-media/calculadora-media.component";
import {ListarComponentesComponent} from "./listar-componentes/listar-componentes.component";

const routes: Routes = [
  { path: '', redirectTo: 'app-listar-componentes', pathMatch: 'full' },
  { path: 'app-listar-componentes', component: ListarComponentesComponent },
  { path: 'calculadora-media', component: CalculadoraMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
