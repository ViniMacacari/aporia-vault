import { TestBed } from '@angular/core/testing';

import { ActiveVaultsService } from './active-vaults.service';

describe('ActiveVaultsService', () => {
  let service: ActiveVaultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveVaultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
