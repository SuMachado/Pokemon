import { TestBed } from '@angular/core/testing';

import { SecureConnectionInterceptor } from './secure-connection.interceptor';

describe('SecureConnectionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecureConnectionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecureConnectionInterceptor = TestBed.inject(SecureConnectionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
