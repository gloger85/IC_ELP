import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDetailInfoBarComponent } from './shared-detail-info-bar.component';

describe('SharedDetailInfoBarComponent', () => {
  let component: SharedDetailInfoBarComponent;
  let fixture: ComponentFixture<SharedDetailInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDetailInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDetailInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
