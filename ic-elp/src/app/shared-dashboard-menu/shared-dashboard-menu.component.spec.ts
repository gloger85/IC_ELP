import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDashboardMenuComponent } from './shared-dashboard-menu.component';

describe('SharedDashboardMenuComponent', () => {
  let component: SharedDashboardMenuComponent;
  let fixture: ComponentFixture<SharedDashboardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDashboardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
