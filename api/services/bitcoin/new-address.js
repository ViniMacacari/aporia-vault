import { GeneratePrivateKey } from "../../utils/generate-private-key.js"

export class NewBitcoinAddressService {
    generator = new GeneratePrivateKey()

    generate() {
        return this.generator.generateSeed()
    }
}