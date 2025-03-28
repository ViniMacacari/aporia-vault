import { GeneratePrivateKey } from "./generate-private-key.js"

export class GenerateArray {
    generateKey = new GeneratePrivateKey()

    generate(encKey, key, type, aporiaKey) {
        if (type === 'bip-39') {
            console.log('bip-39')
            return {
                type: type,
                vault: {
                    generationDate: new Date().toISOString().split('T')[0],
                    gapLimit: 20,
                    aporiaKey: aporiaKey,
                    balance: {
                        type: "manual"
                    },
                    seed: encKey,
                    wallet: []
                }
            }
        } else if (type === 'private-key-wif') {
            console.log('private-key-wif')
            const walletData = this.generateKey.getAddressFromWIF(key)

            return {
                type: type,
                vault: {
                    generationDate: new Date().toISOString().split('T')[0],
                    gapLimit: 20,
                    aporiaKey: aporiaKey,
                    balance: {
                        type: "manual"
                    },
                    seed: "",
                    wallet: [
                        {
                            path: "?",
                            address: walletData.address,
                            publicKey: walletData.publicKey,
                            privateKey: encKey
                        }
                    ]
                }
            }
        } else if (type === 'private-key-hex') {
            console.log('private-key-hex')
            let walletData = this.generateKey.privateKeyToWIF(key)
            walletData = this.generateKey.getAddressFromWIF(key)

            return {
                type: type,
                vault: {
                    generationDate: new Date().toISOString().split('T')[0],
                    gapLimit: 20,
                    aporiaKey: aporiaKey,
                    balance: {
                        type: "manual"
                    },
                    seed: "",
                    wallet: [
                        {
                            path: "?",
                            address: walletData.address,
                            publicKey: walletData.publicKey,
                            privateKey: encKey
                        }
                    ]
                }
            }
        }
    }
}

