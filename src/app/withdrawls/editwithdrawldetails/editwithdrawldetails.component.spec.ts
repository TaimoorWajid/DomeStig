import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwithdrawldetailsComponent } from './editwithdrawldetails.component';

describe('EditwithdrawldetailsComponent', () => {
  let component: EditwithdrawldetailsComponent;
  let fixture: ComponentFixture<EditwithdrawldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditwithdrawldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditwithdrawldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
