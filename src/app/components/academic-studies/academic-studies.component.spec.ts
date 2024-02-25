import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicStudiesComponent } from './academic-studies.component';

describe('AcademicStudiesComponent', () => {
  let component: AcademicStudiesComponent;
  let fixture: ComponentFixture<AcademicStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicStudiesComponent]
    });
    fixture = TestBed.createComponent(AcademicStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
