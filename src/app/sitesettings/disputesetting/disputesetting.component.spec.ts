import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesettingComponent } from './disputesetting.component';

describe('DisputesettingComponent', () => {
  let component: DisputesettingComponent;
  let fixture: ComponentFixture<DisputesettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
