import { TestBed } from '@angular/core/testing';

import { UnlockVaultService } from './unlock-vault.service';

describe('UnlockVaultService', () => {
  let service: UnlockVaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockVaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
