import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEventLogComponent } from './hr-event-log.component';

describe('HrEventLogComponent', () => {
  let component: HrEventLogComponent;
  let fixture: ComponentFixture<HrEventLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEventLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEventLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
