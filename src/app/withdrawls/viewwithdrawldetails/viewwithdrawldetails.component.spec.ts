import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwithdrawldetailsComponent } from './viewwithdrawldetails.component';

describe('ViewwithdrawldetailsComponent', () => {
  let component: ViewwithdrawldetailsComponent;
  let fixture: ComponentFixture<ViewwithdrawldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwithdrawldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwithdrawldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
