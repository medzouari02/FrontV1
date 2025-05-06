import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicianComponent } from './add-technician.component';

describe('AddTechnicianComponent', () => {
  let component: AddTechnicianComponent;
  let fixture: ComponentFixture<AddTechnicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTechnicianComponent]
    });
    fixture = TestBed.createComponent(AddTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
