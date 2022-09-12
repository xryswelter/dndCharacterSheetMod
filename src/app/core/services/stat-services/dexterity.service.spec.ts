import { TestBed } from '@angular/core/testing';

import { DexterityService } from './dexterity.service';

describe('DexterityService', () => {
  let service: DexterityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexterityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
