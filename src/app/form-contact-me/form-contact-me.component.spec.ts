import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactMeComponent } from './form-contact-me.component';

describe('FormContactMeComponent', () => {
  let component: FormContactMeComponent;
  let fixture: ComponentFixture<FormContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
