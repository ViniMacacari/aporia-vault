import { BepCrypt } from '../../libs/bepcrypt/index.js'
import { DeadContent } from '../security-boost/dead-content.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class NewVaultService {
    bepcrypt = new BepCrypt()
    deadContent = new DeadContent()

    async new(data) {
        let content = ''

        if (data.settings.aporiaKey === true) {
            console.log('aqui2')
            content = await this.preEncrytption(data.content)
            content = JSON.stringify(content)
            content = await this.boost(content)
            console.log(content)
        } else {
            console.log('teste')
            content = await this.boost(content)
            console.log(content)
        }

        console.log(data.privateKey)

        let aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: content
        })

        console.log(aporiaVault)

        const safeFileName = data.fileName.replace(/\s+/g, '-')
        const filename = `${safeFileName}.aporia`

        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')

        await fs.mkdir(vaultsDir, { recursive: true })

        const filePath = path.join(vaultsDir, filename)

        if (data.settings.fakeWallet === true) {
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

    async preEncrytption(content) {
        const randomKey = await this.generateRandomString(48)
        console.log(randomKey)
        console.log(content)

        let aporiaPreEncryption = await this.bepcrypt.encrypt({
            privateKey: content,
            content: randomKey
        })

        aporiaPreEncryption = Buffer.from(aporiaPreEncryption, 'utf-8')

        return {
            content: aporiaPreEncryption.toString('base64'),
            key: randomKey
        }
    }

    async generateRandomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
        let result = ''

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length)
            result += chars[randomIndex]
        }

        return result
    }
}