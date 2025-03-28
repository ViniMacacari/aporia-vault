import { GeneratePrivateKey } from "./generate-private-key.js"

export class GenerateArray {
    generateKey = new GeneratePrivateKey()

    generate(content, decContent, type, aporiaKey) {
        if (type === 'bip-39') {
            return {
                type: type,
                vault: {
                    generationDate: new Date().toISOString().split('T')[0],
                    gapLimit: 20,
                    aporiaKey: aporiaKey,
                    balance: {
                        type: "manual"
                    },
                    seed: content,
                    wallet: []
                }
            }
        } else if (type === 'private-key-wif') {
            const walletData = this.generateKey.getAddressFromWIF(decContent)

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
                            privateKey: content
                        }
                    ]
                }
            }
        } else if (type === 'private-key-hex') {
            let walletData = this.generateKey.privateKeyToWIF(decContent)
            walletData = this.generateKey.getAddressFromWIF(walletData)

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
                            privateKey: content
                        }
                    ]
                }
            }
        }
    }
}

