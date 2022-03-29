import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofbookingdisputesComponent } from './listofbookingdisputes.component';

describe('ListofbookingdisputesComponent', () => {
  let component: ListofbookingdisputesComponent;
  let fixture: ComponentFixture<ListofbookingdisputesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofbookingdisputesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofbookingdisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
