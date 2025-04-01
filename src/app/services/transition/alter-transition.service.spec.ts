import { TestBed } from '@angular/core/testing';

import { RouterTransitionService } from './alter-transition.service';

describe('AlterTransitionService', () => {
  let service: RouterTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
