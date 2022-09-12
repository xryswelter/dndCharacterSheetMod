import { TestBed } from '@angular/core/testing';

import { ConstitutionService } from './constitution.service';

describe('ConstitutionService', () => {
  let service: ConstitutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstitutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
