import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpaymentoptionsComponent } from './listofpaymentoptions.component';

describe('ListofpaymentoptionsComponent', () => {
  let component: ListofpaymentoptionsComponent;
  let fixture: ComponentFixture<ListofpaymentoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofpaymentoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpaymentoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
