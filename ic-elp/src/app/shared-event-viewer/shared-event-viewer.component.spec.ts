import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedEventViewerComponent } from './shared-event-viewer.component';

describe('SharedEventViewerComponent', () => {
  let component: SharedEventViewerComponent;
  let fixture: ComponentFixture<SharedEventViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedEventViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedEventViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
