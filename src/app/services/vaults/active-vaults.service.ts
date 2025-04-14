import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ActiveVaultsService {
  private storageKey = 'activeVault'

  constructor() {
    const stored = sessionStorage.getItem(this.storageKey)
    if (stored) {
      this.vaultInfo = JSON.parse(stored)
    }
  }

  private vaultInfo: any = {}

  setVaultInfo(vaultInfo: any): void {
    this.vaultInfo = vaultInfo
    sessionStorage.setItem(this.storageKey, JSON.stringify(vaultInfo))
  }

  getVaultInfo(): any {
    return this.vaultInfo
  }

  clearVaultInfo(): void {
    this.vaultInfo = {}
    sessionStorage.removeItem(this.storageKey)
  }
}