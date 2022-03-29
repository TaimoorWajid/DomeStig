import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserscustomerComponent } from './editusercustomer.component';

describe('AddusersComponent', () => {
  let component: EdituserscustomerComponent;
  let fixture: ComponentFixture<EdituserscustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserscustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserscustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
