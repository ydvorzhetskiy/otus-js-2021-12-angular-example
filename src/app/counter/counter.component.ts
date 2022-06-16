import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CounterService} from "../counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(public counterService: CounterService) {
  }
}
