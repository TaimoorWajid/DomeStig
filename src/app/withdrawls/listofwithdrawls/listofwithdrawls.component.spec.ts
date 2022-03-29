import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofwithdrawlsComponent } from './listofwithdrawls.component';

describe('ListofwithdrawlsComponent', () => {
  let component: ListofwithdrawlsComponent;
  let fixture: ComponentFixture<ListofwithdrawlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofwithdrawlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofwithdrawlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
