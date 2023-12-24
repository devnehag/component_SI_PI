import { Component } from '@angular/core';


@Component({
  selector: 'app-twb',
  templateUrl: './twb.component.html',
  styleUrls: ['./twb.component.css']
})
export class TwbComponent {
  title:string ='This is my title';
  username: string = '';
  resetUsername() {
    // Reset the username to an empty string
    this.username = '';
  }
}
