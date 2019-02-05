import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAvailabilityViewerComponent } from './manager-availability-viewer.component';

describe('ManagerAvailabilityViewerComponent', () => {
  let component: ManagerAvailabilityViewerComponent;
  let fixture: ComponentFixture<ManagerAvailabilityViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAvailabilityViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAvailabilityViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
