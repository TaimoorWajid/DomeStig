import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTPdetailsComponent } from './smtpdetails.component';

describe('SMTPdetailsComponent', () => {
  let component: SMTPdetailsComponent;
  let fixture: ComponentFixture<SMTPdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMTPdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTPdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
