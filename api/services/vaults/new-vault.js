import { BepCrypt } from '../../libs/bepcrypt/index.js'
import path from 'path'
import fs from 'fs/promises'

export class NewVaultService {
    bepcrypt = new BepCrypt()

    async new(data) {
        const aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: data.content
        })

        const safeFileName = data.fileName.replace(/\s+/g, '-')
        const filename = `${safeFileName}.aporia`

        const chosenDir = data.directory

        await fs.mkdir(chosenDir, { recursive: true })
        const filePath = path.join(chosenDir, filename)

        await fs.writeFile(filePath, JSON.stringify(aporiaVault))

        return filePath
    }
}