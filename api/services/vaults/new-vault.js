import { BepCrypt } from '../../libs/bepcrypt/index.js'
import { DeadContent } from '../security-boost/dead-content.js'
import { KeyTypeValidator } from '../../utils/key-type-validator.js'
import { GenerateArray } from '../../utils/generate-array.js'
import { AporiaKey } from '../../utils/aporiakey.js'
import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class NewVaultService {
    bepcrypt = new BepCrypt()
    deadContent = new DeadContent()
    keyTyper = new KeyTypeValidator()
    arrayGen = new GenerateArray()
    aporiaEncryption = new AporiaKey()

    async new(data) {
        let content = ''
        let aporiaKey = ''

        if (data.settings.aporiaKey === true) {
            const type = this.keyTyper.detect(data.content)
            console.log(type)
            content = await this.aporiaEncryption.generate(data.content)
            console.log(content)
            console.log('teste-<', content.clientKey)
            aporiaKey = await this.boost(content.clientKey)
            console.log(content.clientDecKey)
            content = this.arrayGen.generate(content.content, data.content, type, true, content.clientKey)
            content = JSON.stringify(content)
            content = await this.boost(content)
        } else {
            const type = this.keyTyper.detect(data.content)
            content = this.arrayGen.generate(data.content, data.content, type, false)
            content = JSON.stringify(content)
            content = await this.boost(content)
        }

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

        if (data.settings.fakeWallet === true) {
            aporiaVault = 'plausibleDeniability===' + aporiaVault
        }

        await fs.writeFile(filePath, aporiaVault)

        if (aporiaKey.length > 0) {
            const aporiaKeyFile = path.join(vaultsDir, `${safeFileName}.aporiakey`)
            await fs.writeFile(aporiaKeyFile, aporiaKey)
        }

        return {
            filePath,
            aporiaKey: aporiaKey
        }
    }

    async boost(content) {
        const raw = this.deadContent.addContent(content)
        const buffer = Buffer.from(raw, 'utf-8')

        return buffer.toString('base64')
    }
}