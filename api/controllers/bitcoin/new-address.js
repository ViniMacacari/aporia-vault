import { NewBitcoinAddressService } from "../../services/bitcoin/new-address.js"

export class NewBitcoinAddressController {
    async create(req, res) {
        try {
            const service = new NewBitcoinAddressService()

            const result = service.generate()

            return res.status(201).json({
                message: 'Bitcoin address created successfully',
                content: result
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Failed to create vault' })
        }
    }
}