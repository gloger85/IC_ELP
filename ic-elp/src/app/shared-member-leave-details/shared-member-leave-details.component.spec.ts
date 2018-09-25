import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMemberLeaveDetailsComponent } from './shared-member-leave-details.component';

describe('SharedMemberLeaveDetailsComponent', () => {
  let component: SharedMemberLeaveDetailsComponent;
  let fixture: ComponentFixture<SharedMemberLeaveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedMemberLeaveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMemberLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
