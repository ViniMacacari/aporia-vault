import { Injectable } from '@angular/core'
import { InternalRequestService } from '../request/internal-request.service'

@Injectable({
  providedIn: 'root'
})
export class UnlockVaultService {

  constructor(
    private ireq: InternalRequestService
  ) { }

  async openVault(data: { privateKey: string, fileName: string, filePathAporiaKey: string | undefined }): Promise<any> {
    try {
      const vault = await this.ireq.post('/vaults/read', {
        privateKey: data.privateKey,
        fileName: data.fileName,
        filePathAporiaKey: data.filePathAporiaKey
      })

      return vault.data
    } catch (error: any) {
      throw error.error
    }
  }
}