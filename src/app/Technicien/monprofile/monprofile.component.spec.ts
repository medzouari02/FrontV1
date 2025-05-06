import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonprofileComponent } from './monprofile.component';

describe('MonprofileComponent', () => {
  let component: MonprofileComponent;
  let fixture: ComponentFixture<MonprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonprofileComponent]
    });
    fixture = TestBed.createComponent(MonprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
