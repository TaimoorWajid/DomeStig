import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawoptionComponent } from './withdrawoption.component';

describe('WithdrawoptionComponent', () => {
  let component: WithdrawoptionComponent;
  let fixture: ComponentFixture<WithdrawoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
