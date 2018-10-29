import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDetailInfoBarComponent } from './hr-detail-info-bar.component';

describe('HrDetailInfoBarComponent', () => {
  let component: HrDetailInfoBarComponent;
  let fixture: ComponentFixture<HrDetailInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDetailInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDetailInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
