import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLandingPage } from './sub-landing-page';

describe('SubLandingPage', () => {
  let component: SubLandingPage;
  let fixture: ComponentFixture<SubLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubLandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
