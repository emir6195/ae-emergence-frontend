import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSafeComponent } from './people-safe.component';

describe('PeopleSafeComponent', () => {
  let component: PeopleSafeComponent;
  let fixture: ComponentFixture<PeopleSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleSafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
