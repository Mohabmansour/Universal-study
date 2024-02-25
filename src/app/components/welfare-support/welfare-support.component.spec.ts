import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareSupportComponent } from './welfare-support.component';

describe('WelfareSupportComponent', () => {
  let component: WelfareSupportComponent;
  let fixture: ComponentFixture<WelfareSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelfareSupportComponent]
    });
    fixture = TestBed.createComponent(WelfareSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
