import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyLibraryComponent } from './third-party-library.component';

describe('ThirdPartyLibraryComponent', () => {
  let component: ThirdPartyLibraryComponent;
  let fixture: ComponentFixture<ThirdPartyLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
