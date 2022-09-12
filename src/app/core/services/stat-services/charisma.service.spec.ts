import { TestBed } from '@angular/core/testing';

import { CharismaService } from './charisma.service';

describe('CharismaService', () => {
  let service: CharismaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharismaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
