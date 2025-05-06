import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianListComponent } from './technician-list.component';

describe('TechnicianListComponent', () => {
  let component: TechnicianListComponent;
  let fixture: ComponentFixture<TechnicianListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianListComponent]
    });
    fixture = TestBed.createComponent(TechnicianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
