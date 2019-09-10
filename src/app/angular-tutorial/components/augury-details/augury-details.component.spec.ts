import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuguryDetailsComponent } from './augury-details.component';

describe('AuguryDetailsComponent', () => {
  let component: AuguryDetailsComponent;
  let fixture: ComponentFixture<AuguryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuguryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuguryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
