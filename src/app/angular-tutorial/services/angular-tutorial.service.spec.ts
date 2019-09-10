import { TestBed } from '@angular/core/testing';

import { AngularTutorialService } from './angular-tutorial.service';

describe('AngularTutorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTutorialService = TestBed.get(AngularTutorialService);
    expect(service).toBeTruthy();
  });
});
