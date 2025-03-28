import { NewVaultService } from '../../services/vaults/new-vault.js'

export class NewVaultController {
    async create(req, res) {
        try {
            const { privateKey, content, fileName, settings } = req.body

            if (!privateKey || !content || !fileName) {
                return res.status(400).json({ error: 'Missing required fields' })
            }

            const service = new NewVaultService()
            const filePath = await service.new({ privateKey, content, fileName, settings })

            return res.status(201).json({
                message: 'Vault created successfully',
                content: filePath
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Failed to create vault' })
        }
    }
}