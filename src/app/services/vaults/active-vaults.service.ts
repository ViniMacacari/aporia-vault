import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveVaultsService {

  constructor() { }

  vaultInfo: any = {}

  setVaultInfo(vaultInfo: any): void {
    this.vaultInfo = vaultInfo
  }

  getVaultInfo(): any {
    return this.vaultInfo
  }
}
