import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienLayoutComponent } from './technicien-layout.component';

describe('TechnicienLayoutComponent', () => {
  let component: TechnicienLayoutComponent;
  let fixture: ComponentFixture<TechnicienLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicienLayoutComponent]
    });
    fixture = TestBed.createComponent(TechnicienLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
