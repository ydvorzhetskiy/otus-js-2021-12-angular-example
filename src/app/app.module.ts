import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAwesomeComponent } from './my-awesome/my-awesome.component';
import { CounterComponent } from './counter/counter.component';
import { HighlightDirective } from './highlight.directive';
import { WellComponent } from './well/well.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAwesomeComponent,
    CounterComponent,
    HighlightDirective,
    WellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
