import { TestBed } from '@angular/core/testing';

import { DashboardAccessService } from './dashboard-access.service';

describe('DashboardAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardAccessService = TestBed.get(DashboardAccessService);
    expect(service).toBeTruthy();
  });
});
