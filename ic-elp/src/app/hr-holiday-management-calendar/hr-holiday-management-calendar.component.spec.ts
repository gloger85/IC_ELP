import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHolidayManagementCalendarComponent } from './hr-holiday-management-calendar.component';

describe('HrHolidayManagementCalendarComponent', () => {
  let component: HrHolidayManagementCalendarComponent;
  let fixture: ComponentFixture<HrHolidayManagementCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHolidayManagementCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHolidayManagementCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
