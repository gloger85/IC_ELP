import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAddHolidayComponent } from './hr-add-holiday.component';

describe('HrAddHolidayComponent', () => {
  let component: HrAddHolidayComponent;
  let fixture: ComponentFixture<HrAddHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrAddHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAddHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
