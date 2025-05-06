import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProfilClientComponent } from './mon-profil-client.component';

describe('MonProfilClientComponent', () => {
  let component: MonProfilClientComponent;
  let fixture: ComponentFixture<MonProfilClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonProfilClientComponent]
    });
    fixture = TestBed.createComponent(MonProfilClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
