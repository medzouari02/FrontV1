import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonmissionComponent } from './monmission.component';

describe('MonmissionComponent', () => {
  let component: MonmissionComponent;
  let fixture: ComponentFixture<MonmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonmissionComponent]
    });
    fixture = TestBed.createComponent(MonmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
