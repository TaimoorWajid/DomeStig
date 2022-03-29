import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofservicesComponent } from './listofservices.component';

describe('ListofservicesComponent', () => {
  let component: ListofservicesComponent;
  let fixture: ComponentFixture<ListofservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
