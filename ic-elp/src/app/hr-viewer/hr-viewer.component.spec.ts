import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrViewerComponent } from './hr-viewer.component';

describe('HrViewerComponent', () => {
  let component: HrViewerComponent;
  let fixture: ComponentFixture<HrViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
