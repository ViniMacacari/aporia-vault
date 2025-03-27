import { generateMnemonic, mnemonicToSeedSync, wordlists } from 'bip39'
import { HDKey } from '@scure/bip32'

export class GeneratePrivateKey {
    generateSeed() {
        return generateMnemonic(128, undefined, wordlists.english)
    }

    getPrivateKeysFromMnemonic(mnemonic, gapLimit = 20) {
        const seed = mnemonicToSeedSync(mnemonic)
        const root = HDKey.fromMasterSeed(seed)
        const keys = []

        for (let i = 0; i < gapLimit; i++) {
            const child = root.derive(`m/44'/0'/0'/0/${i}`)
            const privateKey = child.privateKey?.toString('hex') || ''
            keys.push({
                path: `m/44'/0'/0'/0/${i}`,
                privateKey
            })
        }

        return keys
    }
}