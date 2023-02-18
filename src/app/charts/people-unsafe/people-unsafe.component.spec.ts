import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleUnsafeComponent } from './people-unsafe.component';

describe('PeopleUnsafeComponent', () => {
  let component: PeopleUnsafeComponent;
  let fixture: ComponentFixture<PeopleUnsafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleUnsafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleUnsafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
