import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../../components/button/button.component"
import { VaultElementComponent } from "../../components/vault-element/vault-element.component"

import { InternalRequestService } from '../../services/request/internal-request.service'
import { DialogNewVaultComponent } from "../../components/dialog-new-vault/dialog-new-vault.component"
import { LoaderComponent } from "../../components/loader/loader.component"

import { RouterTransitionService } from '../../services/transition/alter-transition.service'
import { Router } from 'express'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, VaultElementComponent, DialogNewVaultComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  vaults: string[] = []
  hoveredVault: string | null = null
  showNewVault: boolean = false
  showLoader: boolean = false

  @ViewChild(DialogNewVaultComponent) newVault?: DialogNewVaultComponent

  constructor(
    private ireq: InternalRequestService,
    private router: RouterTransitionService
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

    setTimeout(() => {
      this.router.navigate('/vault')
    }, 1500)
  }
}