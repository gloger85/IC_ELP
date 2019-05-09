import { TestBed } from '@angular/core/testing';

import { CompensationService } from './compensation.service';

describe('CompensationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompensationService = TestBed.get(CompensationService);
    expect(service).toBeTruthy();
  });
});
