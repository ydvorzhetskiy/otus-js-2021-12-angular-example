import {Component} from '@angular/core';

@Component({
  selector: 'app-well',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      margin-top: 5px;
      border: 1px solid black;
      padding: 5px;
    }
  `]
})
export class WellComponent {

  constructor() {
  }

}
