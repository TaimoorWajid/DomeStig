import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpromosComponent } from './listofpromos.component';

describe('ListofpromosComponent', () => {
  let component: ListofpromosComponent;
  let fixture: ComponentFixture<ListofpromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofpromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
