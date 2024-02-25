import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkSercicesComponent } from './uk-sercices.component';

describe('UkSercicesComponent', () => {
  let component: UkSercicesComponent;
  let fixture: ComponentFixture<UkSercicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UkSercicesComponent]
    });
    fixture = TestBed.createComponent(UkSercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
