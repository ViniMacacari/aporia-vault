import { BepCrypt } from "../libs/bepcrypt/index.js"

export class AporiaKey {
    bepcrypt = new BepCrypt()

    async generate(content) {
        const walletKey = await this.generateRandomString(32)
        const clientKey = await this.generateRandomString(32)

        let walletEncrypted = await this.bepcrypt.encrypt({
            privateKey: walletKey,
            content: content
        })

        let clientEncrypted = await this.bepcrypt.encrypt({
            privateKey: clientKey,
            content: walletKey
        })

        walletEncrypted = Buffer.from(walletEncrypted, 'utf-8')
        clientEncrypted = Buffer.from(clientEncrypted, 'utf-8')

        return {
            walletEncrypted: walletEncrypted.toString('base64'),
            clientDecKey: clientKey,
            clientKey: clientEncrypted.toString('base64')
        }
    }

    async backToNormal({ clientKey, aporiaKey }) {
        aporiaKey = Buffer.from(aporiaKey, 'base64').toString('utf-8')

        const password = await this.bepcrypt.decrypt({
            privateKey: clientKey,
            content: aporiaKey
        })

        return password
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