import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularDetailsComponent } from './nebular-details.component';

describe('NebularDetailsComponent', () => {
  let component: NebularDetailsComponent;
  let fixture: ComponentFixture<NebularDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebularDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
