import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforexample',
  templateUrl: './ngforexample.component.html',
  styleUrls: ['./ngforexample.component.css']
})
export class NgforexampleComponent {
  showDetails = false;
  buttonClicks: string[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    // this.buttonClicks.push(`Button clicked at ${new Date().toLocaleTimeString()}`);
    this.buttonClicks.push(`Button clicked at ${this.buttonClicks.length+1}`);
  }
}
