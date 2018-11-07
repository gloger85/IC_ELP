import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHolidayPlannerCalendarComponent } from './hr-holiday-planner-calendar.component';

describe('HrHolidayPlannerCalendarComponent', () => {
  let component: HrHolidayPlannerCalendarComponent;
  let fixture: ComponentFixture<HrHolidayPlannerCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHolidayPlannerCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHolidayPlannerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
