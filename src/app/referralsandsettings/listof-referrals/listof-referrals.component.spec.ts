import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofReferralsComponent } from './listof-referrals.component';

describe('ListofReferralsComponent', () => {
  let component: ListofReferralsComponent;
  let fixture: ComponentFixture<ListofReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
