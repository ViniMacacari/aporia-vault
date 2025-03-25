import { BepCrypt } from '../libs/bepcrypt/index.js'
import path from 'path'
import fs from 'fs/promises'
import os from 'os'

export class NewVaultService {
    bepcrypt = new BepCrypt()

    async new(data) {
        const aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: data.content
        })

        const vaultDir = path.join(os.homedir(), 'AppData', 'Local', '.aporia')
        await fs.mkdir(vaultDir, { recursive: true })

        const safeFileName = data.fileName.replace(/\s+/g, '-')
        const filename = `${safeFileName}.aporia`
        const filePath = path.join(vaultDir, filename)

        await fs.writeFile(filePath, JSON.stringify(aporiaVault))

        return filePath
    }
}