import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesettingsComponent } from './servicesettings.component';

describe('ServicesettingsComponent', () => {
  let component: ServicesettingsComponent;
  let fixture: ComponentFixture<ServicesettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
