import { TestBed } from '@angular/core/testing';

import { TestGuard } from './test.guard';

describe('TestGuard', () => {
  let guard: TestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
