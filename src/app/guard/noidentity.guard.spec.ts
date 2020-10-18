import { TestBed } from '@angular/core/testing';

import { NoidentityGuard } from './noidentity.guard';

describe('NoidentityGuard', () => {
  let guard: NoidentityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoidentityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
