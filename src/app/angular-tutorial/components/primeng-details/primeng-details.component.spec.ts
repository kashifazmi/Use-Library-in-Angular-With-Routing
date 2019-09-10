import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDetailsComponent } from './primeng-details.component';

describe('PrimengDetailsComponent', () => {
  let component: PrimengDetailsComponent;
  let fixture: ComponentFixture<PrimengDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
