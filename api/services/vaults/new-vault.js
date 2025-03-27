import { BepCrypt } from '../../libs/bepcrypt/index.js'
import { DeadContent } from '../security-boost/dead-content.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class NewVaultService {
    bepcrypt = new BepCrypt()
    deadContent = new DeadContent()

    async new(data) {
        const content = await this.boost(data.content)

        let aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: content
        })

        const safeFileName = data.fileName.replace(/\s+/g, '-')
        const filename = `${safeFileName}.aporia`

        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')

        await fs.mkdir(vaultsDir, { recursive: true })

        const filePath = path.join(vaultsDir, filename)

        if (data.settings.fakeWallet) {
            aporiaVault = 'plausibleDeniability===' + aporiaVault
        }

        await fs.writeFile(filePath, aporiaVault)

        return filePath
    }

    async boost(content) {
        const raw = this.deadContent.addContent(content)
        const buffer = Buffer.from(raw, 'utf-8')

        return buffer.toString('base64')
    }
}