import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateZoneGuardGuard } from './private-zone-guard.guard';

describe('privateZoneGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateZoneGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
