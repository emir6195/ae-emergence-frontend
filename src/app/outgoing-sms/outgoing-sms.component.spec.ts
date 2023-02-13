import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingSmsComponent } from './outgoing-sms.component';

describe('OutgoingSmsComponent', () => {
  let component: OutgoingSmsComponent;
  let fixture: ComponentFixture<OutgoingSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutgoingSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
