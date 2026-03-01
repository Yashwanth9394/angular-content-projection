import { Component } from '@angular/core';

@Component({
  selector: 'app-sport',
  imports: [],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css',
  standalone: true
})
export class SportComponent {
  sendToParent() {
    console.log('sendToParent');
  }

}
