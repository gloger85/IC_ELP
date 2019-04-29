import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationManagerComponent } from './compensation-manager.component';

describe('CompensationManagerComponent', () => {
  let component: CompensationManagerComponent;
  let fixture: ComponentFixture<CompensationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
