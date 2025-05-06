import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTechnicianDialogComponent } from './assign-technician-dialog.component';

describe('AssignTechnicianDialogComponent', () => {
  let component: AssignTechnicianDialogComponent;
  let fixture: ComponentFixture<AssignTechnicianDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignTechnicianDialogComponent]
    });
    fixture = TestBed.createComponent(AssignTechnicianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
