import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMemberCompensationDetailsComponent } from './shared-member-compensation-details.component';

describe('SharedMemberCompensationDetailsComponent', () => {
  let component: SharedMemberCompensationDetailsComponent;
  let fixture: ComponentFixture<SharedMemberCompensationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedMemberCompensationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMemberCompensationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
