import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  readonly initialValue = 0;

  private currentValueSubject = new BehaviorSubject(this.initialValue);

  readonly currentValue$: Observable<number> = this.currentValueSubject.asObservable();

  private get currentValue() {
     return this.currentValueSubject.getValue();
  }

  constructor() {
  }

  setValue(newValue: number): void {
    this.currentValueSubject.next(newValue);
  }

  increase(): void {
    this.currentValueSubject.next(this.currentValue + 1);
  }

  decrease(): void {
    this.currentValueSubject.next(this.currentValue - 1);
  }

  reset(): void {
    this.currentValueSubject.next(this.initialValue);
  }
}
