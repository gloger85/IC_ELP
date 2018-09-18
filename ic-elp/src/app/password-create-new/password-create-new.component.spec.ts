import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCreateNewComponent } from './password-create-new.component';

describe('PasswordCreateNewComponent', () => {
  let component: PasswordCreateNewComponent;
  let fixture: ComponentFixture<PasswordCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
