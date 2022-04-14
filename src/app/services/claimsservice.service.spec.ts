import { TestBed } from '@angular/core/testing';

import { ClaimsserviceService } from './claimsservice.service';

describe('ClaimsserviceService', () => {
  let service: ClaimsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
