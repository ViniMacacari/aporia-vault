import { AllVaultsService } from '../../services/vaults/all-vaults.js'

export class AllVaultsController {
    async list(req, res) {
        try {
            const service = new AllVaultsService()
            const vaults = await service.list()

            return res.status(200).json({
                message: 'Vaults list loaded successfully',
                vaults
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Failed to list vaults' })
        }
    }
}