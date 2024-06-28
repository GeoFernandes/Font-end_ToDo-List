import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarTarefaComponent } from '../../criar-tarefa/criar-tarefa.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CriarTarefaComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
