import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDashboardMenuComponent } from './hr-dashboard-menu.component';

describe('HrDashboardMenuComponent', () => {
  let component: HrDashboardMenuComponent;
  let fixture: ComponentFixture<HrDashboardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDashboardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
