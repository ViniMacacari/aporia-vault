import { BepCrypt } from '../../libs/bepcrypt/index.js'
import { DeadContent } from '../security-boost/dead-content.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class ReadVaultService {
    bepcrypt = new BepCrypt()
    deadContent = new DeadContent()

    async read(data) {
        const safeFileName = data.fileName.replace(/\s+/g, '-') + '.aporia'

        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')
        const filePath = path.join(vaultsDir, safeFileName)

        const exists = await this.fileExists(filePath)
        if (!exists) throw new Error('File not found')

        const content = await fs.readFile(filePath, 'utf-8')
        const parsed = JSON.parse(content)

        const decrypted = await this.bepcrypt.decrypt({
            content: parsed,
            privateKey: data.privateKey
        })

        const decoded = Buffer.from(decrypted, 'base64').toString('utf-8')
        const original = this.deadContent.extractContent(decoded)

        return original
    }

    async fileExists(filePath) {
        try {
            await fs.access(filePath)
            return true
        } catch {
            return false
        }
    }
}