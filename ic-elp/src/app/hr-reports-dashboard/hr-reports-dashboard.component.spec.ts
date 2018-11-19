import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReportsDashboardComponent } from './hr-reports-dashboard.component';

describe('HrReportsDashboardComponent', () => {
  let component: HrReportsDashboardComponent;
  let fixture: ComponentFixture<HrReportsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrReportsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
