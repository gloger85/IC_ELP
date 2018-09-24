import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTeamViewerComponent } from './shared-team-viewer.component';

describe('SharedTeamViewerComponent', () => {
  let component: SharedTeamViewerComponent;
  let fixture: ComponentFixture<SharedTeamViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTeamViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTeamViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
