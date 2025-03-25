import { BepCrypt } from '../libs/bepcrypt/index.js'

export class NewVaultService {
    bepcrypt = new BepCrypt()

    async new(data) {
        const aporiaVault = await this.bepcrypt.encrypt({
            privateKey: data.privateKey,
            content: data.content
        })

        console.log(aporiaVault)
    }
}