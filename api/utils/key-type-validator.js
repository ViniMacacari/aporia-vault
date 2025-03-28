import * as bip39 from 'bip39'

export class KeyTypeValidator {
    detect(value) {
        const text = value.trim()
        const words = text.split(/\s+/)

        if ([12, 15, 18, 21, 24].includes(words.length) && this.validateSeed(words)) {
            return 'bip-39'
        }

        if (/^(5[HJK][1-9A-HJ-NP-Za-km-z]{49}|[KL][1-9A-HJ-NP-Za-km-z]{51})$/.test(text)) {
            return 'private-key-wif'
        }

        if (/^[0-9a-fA-F]{64}$/.test(text)) {
            return 'private-key-hex'
        }

        return 'invalid'
    }

    validateSeed(words) {
        return words.every(p => bip39.wordlists['english'].includes(p.toLowerCase()))
    }
}