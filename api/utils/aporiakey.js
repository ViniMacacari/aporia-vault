import { BepCrypt } from "../libs/bepcrypt/index.js"

export class AporiaKey {
    bepcrypt = new BepCrypt()

    async generate(content) {
        const walletKey = await this.generateRandomString(128)
        const clientKey = await this.generateRandomString(128)

        let walletEncrypted = await this.bepcrypt.encrypt({
            privateKey: content,
            content: walletKey
        })

        let clientEncrypted = await this.bepcrypt.encrypt({
            privateKey: clientKey,
            content: walletKey
        })

        walletEncrypted = Buffer.from(walletEncrypted, 'utf-8')
        clientEncrypted = Buffer.from(clientEncrypted, 'utf-8')

        return {
            content: walletEncrypted.toString('base64'),
            clientDecKey: clientKey,
            clientKey: clientKey
        }
    }

    async backToNormal({ content, clientKey, encrypted }) {
        const walletEncrypted = Buffer.from(encrypted, 'base64').toString('utf-8')

        const walletKey = await this.bepcrypt.decrypt({
            privateKey: clientKey,
            content: walletEncrypted
        })

        if (!walletKey) throw new Error('Invalid AporiaKey or corrupted data')

        const originalContent = await this.bepcrypt.decrypt({
            privateKey: content,
            content: walletKey
        })

        if (!originalContent) throw new Error('Failed to decrypt original content')

        return originalContent
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