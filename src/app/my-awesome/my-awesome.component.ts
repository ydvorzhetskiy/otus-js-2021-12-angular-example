import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-awesome',
  templateUrl: './my-awesome.component.html',
  styleUrls: ['./my-awesome.component.css']
})
export class MyAwesomeComponent implements OnInit {

  user = {
    name: 'Ivan',
    age: 13
  }

  constructor() { }

  ngOnInit(): void {
  }

}
