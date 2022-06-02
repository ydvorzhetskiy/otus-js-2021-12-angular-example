import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeComponent } from './my-awesome.component';

describe('MyAwesomeComponent', () => {
  let component: MyAwesomeComponent;
  let fixture: ComponentFixture<MyAwesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
