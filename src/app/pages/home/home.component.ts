import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../../components/button/button.component"

import { InternalRequestService } from '../../services/request/internal-request.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  vaults: any

  constructor(
    private ireq: InternalRequestService
  ) { }

  async getVault(privateKey: string, fileName: string): Promise<any> {
    const apiVault = await this.ireq.post('/vaults/read', {
      privateKey: privateKey,
      fileName: fileName
    })

    return apiVault.data
  }
}