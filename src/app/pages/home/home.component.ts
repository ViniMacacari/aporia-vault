import { Component, ViewChild, ChangeDetectorRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../../components/button/button.component"
import { VaultElementComponent } from "../../components/vault-element/vault-element.component"

import { InternalRequestService } from '../../services/request/internal-request.service'
import { DialogNewVaultComponent } from "../../components/dialog-new-vault/dialog-new-vault.component"
import { LoaderComponent } from "../../components/loader/loader.component"
import { DialogOpenVaultComponent } from "../../components/dialog-open-vault/dialog-open-vault.component";
import { RouterTransitionService } from '../../services/transition/alter-transition.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, VaultElementComponent, DialogNewVaultComponent, LoaderComponent, DialogOpenVaultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  vaults: string[] = []
  hoveredVault: string | null = null
  showNewVault: boolean = false
  showOpenVault: boolean = false
  showLoader: boolean = false

  selectedVault: string = ''

  @ViewChild(DialogNewVaultComponent) newVault?: DialogNewVaultComponent

  constructor(
    private ireq: InternalRequestService,
    private router: RouterTransitionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mapVaults()
  }

  async getAllVaults(): Promise<{ message: string, vaults: string[] }> {
    return await this.ireq.get('/vaults/all')
  }

  async mapVaults(): Promise<void> {
    const allVaults = await this.getAllVaults()

    this.vaults = allVaults.vaults
  }

  async getVault(privateKey: string, fileName: string): Promise<any> {
    const apiVault = await this.ireq.post('/vaults/read', {
      privateKey: privateKey,
      fileName: fileName
    })

    return apiVault.data
  }

  createdVault(): void {
    this.newVault?.close()
    this.showLoader = false
    this.mapVaults()
  }

  openVault(event: any): void {
    this.selectedVault = event
    this.showOpenVault = true
  }

  creatingVault(): void {
    console.log('teste')
    this.showLoader = false
    this.cdr.detectChanges()
    setTimeout(() => {
      this.showLoader = true
    }, 100)
  }

  vaultInfo(vault: any): void {
    console.log(vault)
    setTimeout(() => {
      this.showLoader = false
    }, 1500)
  }
}