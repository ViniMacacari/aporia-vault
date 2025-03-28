import { BepCrypt } from '../../libs/bepcrypt/index.js'
import { DeadContent } from '../security-boost/dead-content.js'
import { GeneratePrivateKey } from '../../utils/generate-private-key.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class ReadVaultService {
    bepcrypt = new BepCrypt()
    deadContent = new DeadContent()
    generator = new GeneratePrivateKey()

    async read(data) {
        const safeFileName = data.fileName.replace(/\s+/g, '-') + '.aporia'

        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')
        const filePath = path.join(vaultsDir, safeFileName)

        const exists = await this.fileExists(filePath)
        if (!exists) throw new Error('File not found')

        const content = await fs.readFile(filePath, 'utf-8')
        const hasPlausibleDeniability = content.includes('plausibleDeniability===')

        const resetSettings = content.replace('plausibleDeniability===', '')

        const decrypted = await this.bepcrypt.decrypt({
            content: resetSettings,
            privateKey: data.privateKey
        })

        if ((decrypted === null || decrypted === '') && hasPlausibleDeniability) {
            const seed = this.generator.generateSeed()
            const walletInfo = this.generator.getPrivateKeysFromMnemonic(seed)

            return {
                type: 'BIP-39',
                vault: {
                    generationDate: this.generateDate(),
                    gapLimit: 20,
                    aporiaKey: false,
                    balance: {
                        type: 'manual',
                        lastBalance: +(Math.random() * 100).toFixed(8)
                    }
                },
                seed: seed,
                wallet: walletInfo
            }
        }

        if (decrypted.length === 0) throw 'Invalid key'

        const decoded = Buffer.from(decrypted, 'base64').toString('utf-8')

        console.log(decoded)

        const original = this.deadContent.extractContent(decoded)

        console.log(original)

        let result

        try {
            result = JSON.parse(original)
        } catch (_) {
            result = original
        }

        return result
    }

    async fileExists(filePath) {
        try {
            await fs.access(filePath)
            return true
        } catch {
            return false
        }
    }

    generateDate() {
        const now = Date.now()
        const start = new Date('2025-01-01').getTime()
        const end = Math.min(new Date('2025-12-31').getTime(), now)

        const timestamp = Math.floor(Math.random() * (end - start)) + start
        const date = new Date(timestamp)
        return date.toISOString().split('T')[0]
    }
}