import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlGroupComponent } from './form-control-group.component';

describe('FormControlGroupComponent', () => {
  let component: FormControlGroupComponent;
  let fixture: ComponentFixture<FormControlGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
