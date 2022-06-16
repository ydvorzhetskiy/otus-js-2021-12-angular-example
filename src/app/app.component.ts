import {Component} from '@angular/core';
import {MyService} from "./my.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>

    <app-well>
      <app-counter></app-counter>
    </app-well>
    <app-well>
      <app-counter></app-counter>
    </app-well>
    <app-well>
      <app-counter></app-counter>
    </app-well>

    <app-well>
      Value from service : {{counterService.currentValue$ | async | number: '3.0'}}
    </app-well>

    <app-well>
      <button (click)="counterService.reset()">Reset all values!</button>
    </app-well>
  `,
  styles: []
})
export class AppComponent {
  constructor(public counterService: CounterService) {
  }
}
