import { ReadVaultService } from '../../services/vaults/read-vault.js'

export class ReadVaultController {
    async read(req, res) {
        try {
            const { fileName, privateKey } = req.body

            if (!fileName || !privateKey) {
                return res.status(400).json({ error: 'Missing fileName or privateKey' })
            }

            const service = new ReadVaultService()
            const data = await service.read({ fileName, privateKey })

            return res.status(200).json({
                message: 'Vault decrypted successfully',
                data
            })
        } catch (err) {
            console.error(err)
            return res.status(404).json({ error: err.message || 'Failed to read vault' })
        }
    }
}