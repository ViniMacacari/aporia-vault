import { BepCrypt } from '../../libs/bepcrypt/index.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class NewVaultService {
    bepcrypt = new BepCrypt()

    async new(data) {
        const aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: data.content
        })

        const safeFileName = data.fileName.replace(/\s+/g, '-')
        const filename = `${safeFileName}.aporia`

        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')

        await fs.mkdir(vaultsDir, { recursive: true })

        const filePath = path.join(vaultsDir, filename)
        await fs.writeFile(filePath, JSON.stringify(aporiaVault))

        return filePath
    }
}