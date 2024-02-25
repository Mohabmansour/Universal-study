import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalStudyComponent } from './universal-study.component';

describe('UniversalStudyComponent', () => {
  let component: UniversalStudyComponent;
  let fixture: ComponentFixture<UniversalStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalStudyComponent]
    });
    fixture = TestBed.createComponent(UniversalStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
