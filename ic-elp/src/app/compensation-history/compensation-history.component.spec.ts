import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationHistoryComponent } from './compensation-history.component';

describe('CompensationHistoryComponent', () => {
  let component: CompensationHistoryComponent;
  let fixture: ComponentFixture<CompensationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
