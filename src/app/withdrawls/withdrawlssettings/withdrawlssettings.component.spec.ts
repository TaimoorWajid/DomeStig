import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawlssettingsComponent } from './withdrawlssettings.component';

describe('WithdrawlssettingsComponent', () => {
  let component: WithdrawlssettingsComponent;
  let fixture: ComponentFixture<WithdrawlssettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawlssettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawlssettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
