import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienProfileComponent } from './technicien-profile.component';

describe('TechnicienProfileComponent', () => {
  let component: TechnicienProfileComponent;
  let fixture: ComponentFixture<TechnicienProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicienProfileComponent]
    });
    fixture = TestBed.createComponent(TechnicienProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
