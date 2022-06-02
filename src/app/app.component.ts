import {Component} from '@angular/core';
import {MyService} from "./my.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>

    <div>
      My application &laquo;{{title}}&raquo; works!!!
      <br>
      And this is other component:
      <br>
      <br>
      <br>
      <br>
      <br>
      <app-my-awesome></app-my-awesome>
    </div>
  `,
  styles: [`
    div {
      color: gray;
      border: 2px solid black;
      padding: 15px;
    }
  `]
})
export class AppComponent {
  readonly title: string;

  constructor(public helloService: MyService) {
    this.title = helloService.hello();
  }

}
