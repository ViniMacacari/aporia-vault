import { generateMnemonic, mnemonicToSeedSync, wordlists } from 'bip39'
import { HDKey } from '@scure/bip32'
import * as bitcoin from 'bitcoinjs-lib'
import bs58check from 'bs58check'

export class GeneratePrivateKey {
    generateSeed() {
        return generateMnemonic(128, undefined, wordlists.english)
    }

    getPrivateKeysFromMnemonic(mnemonic, gapLimit = 20) {
        const seed = mnemonicToSeedSync(mnemonic)
        const root = HDKey.fromMasterSeed(seed)
        const keys = []

        for (let i = 0; i < gapLimit; i++) {
            const path = `m/44'/0'/0'/0/${i}`
            const child = root.derive(path)
            const privateKeyBuffer = Buffer.from(child.privateKey)
            const privateKey = privateKeyBuffer.toString('hex')
            const wif = this.privateKeyToWIF(privateKeyBuffer)

            const pubkeyBuffer = Buffer.from(child.publicKey)
            const publicKey = pubkeyBuffer.toString('hex')

            const { address: p2pkh } = bitcoin.payments.p2pkh({
                pubkey: pubkeyBuffer,
                network: bitcoin.networks.bitcoin
            })

            const { address: bech32 } = bitcoin.payments.p2wpkh({
                pubkey: pubkeyBuffer,
                network: bitcoin.networks.bitcoin
            })

            keys.push({
                path,
                address: p2pkh,
                publicKey,
                privateKey: wif
            })
        }

        return keys
    }

    privateKeyToWIF(privateKeyHex, compressed = true) {
        const prefix = Buffer.from([0x80])
        const keyBuffer = Buffer.from(privateKeyHex, 'hex')
        const suffix = compressed ? Buffer.from([0x01]) : Buffer.alloc(0)

        const fullKey = Buffer.concat([prefix, keyBuffer, suffix])
        return bs58check.encode(fullKey)
    }
}