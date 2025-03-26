import { TestBed } from '@angular/core/testing';

import { InternalRequestService } from './internal-request.service';

describe('InternalRequestService', () => {
  let service: InternalRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
