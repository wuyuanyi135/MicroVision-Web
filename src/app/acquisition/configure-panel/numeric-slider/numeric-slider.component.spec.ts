import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericSliderComponent } from './numeric-slider.component';

describe('NumericSliderComponent', () => {
  let component: NumericSliderComponent;
  let fixture: ComponentFixture<NumericSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
