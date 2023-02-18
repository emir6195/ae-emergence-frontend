import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyChartComponent } from './safety-chart.component';

describe('SafetyChartComponent', () => {
  let component: SafetyChartComponent;
  let fixture: ComponentFixture<SafetyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
