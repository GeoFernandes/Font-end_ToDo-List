import { Component } from '@angular/core';

@Component({
    selector: 'home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

}
