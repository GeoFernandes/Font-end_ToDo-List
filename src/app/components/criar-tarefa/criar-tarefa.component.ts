import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  standalone: false,
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss'
})
export class CriarTarefaComponent {

  openCreate() {
    console.log("abriu");
  }

}
