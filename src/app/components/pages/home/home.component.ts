import { Component } from '@angular/core';
import { CriarTarefaComponent } from "../../criar-tarefa/criar-tarefa.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CriarTarefaComponent, CommonModule]
})
export class HomeComponent {

  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

}
