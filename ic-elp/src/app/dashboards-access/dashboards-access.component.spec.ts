import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsAccessComponent } from './dashboards-access.component';

describe('DashboardsAccessComponent', () => {
  let component: DashboardsAccessComponent;
  let fixture: ComponentFixture<DashboardsAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
