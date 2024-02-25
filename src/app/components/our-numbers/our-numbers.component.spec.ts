import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNumbersComponent } from './our-numbers.component';

describe('OurNumbersComponent', () => {
  let component: OurNumbersComponent;
  let fixture: ComponentFixture<OurNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurNumbersComponent]
    });
    fixture = TestBed.createComponent(OurNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
