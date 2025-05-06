import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianEditDialogComponent } from './technician-edit-dialog.component';

describe('TechnicianEditDialogComponent', () => {
  let component: TechnicianEditDialogComponent;
  let fixture: ComponentFixture<TechnicianEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianEditDialogComponent]
    });
    fixture = TestBed.createComponent(TechnicianEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
