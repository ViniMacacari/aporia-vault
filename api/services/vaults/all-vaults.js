import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export class AllVaultsService {
    async list() {
        const baseDir = path.dirname(process.execPath)
        const vaultsDir = path.join(baseDir, 'resources', 'vaults')

        try {
            const files = await fs.readdir(vaultsDir)

            const vaults = files
                .filter(file => file.endsWith('.aporia'))
                .map(file => {
                    const nameWithoutExt = file.replace('.aporia', '')
                    return nameWithoutExt.replace(/-/g, ' ')
                })

            return vaults
        } catch (err) {
            console.error('Erro ao listar vaults:', err)
            return []
        }
    }
}