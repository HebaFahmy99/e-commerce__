import { TestBed } from '@angular/core/testing';

import { URLAuthGuard } from './url-auth.guard';

describe('URLAuthGuard', () => {
  let guard: URLAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(URLAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
