import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHolidayPlannerComponent } from './hr-holiday-planner.component';

describe('HrHolidayPlannerComponent', () => {
  let component: HrHolidayPlannerComponent;
  let fixture: ComponentFixture<HrHolidayPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHolidayPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHolidayPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
