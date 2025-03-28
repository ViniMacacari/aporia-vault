import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../../components/button/button.component"
import { VaultElementComponent } from "../../components/vault-element/vault-element.component"

import { InternalRequestService } from '../../services/request/internal-request.service'
import { DialogNewVaultComponent } from "../../components/dialog-new-vault/dialog-new-vault.component"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, VaultElementComponent, DialogNewVaultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  vaults: string[] = []
  hoveredVault: string | null = null
  showNewVault: boolean = false

  constructor(
    private ireq: InternalRequestService
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
}