import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengControlsComponent } from './primeng-controls.component';

describe('PrimengControlsComponent', () => {
  let component: PrimengControlsComponent;
  let fixture: ComponentFixture<PrimengControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
