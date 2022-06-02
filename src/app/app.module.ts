import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAwesomeComponent } from './my-awesome/my-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAwesomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
