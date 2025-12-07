import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyGuide } from './safety-guide';

describe('SafetyGuide', () => {
  let component: SafetyGuide;
  let fixture: ComponentFixture<SafetyGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
