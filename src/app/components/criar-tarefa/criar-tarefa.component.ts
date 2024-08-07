import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss'
})
export class CriarTarefaComponent {

  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose() {
    console.log("CLICOU")
    this.close.emit();
  }

}
