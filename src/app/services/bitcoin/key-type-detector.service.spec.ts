import { TestBed } from '@angular/core/testing';

import { KeyTypeDetectorService } from './key-type-detector.service';

describe('KeyTypeDetectorService', () => {
  let service: KeyTypeDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyTypeDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
