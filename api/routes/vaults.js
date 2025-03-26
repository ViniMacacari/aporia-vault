import { Router } from "express"
import { NewVaultController } from "../controllers/vaults/new-vault.js"
import { ReadVaultController } from "../controllers/vaults/read-vault.js"
import { AllVaultsController } from "../controllers/vaults/all-vaults.js"

export class VaultsRoutes {
    router = Router()

    constructor() {
        this.config()
    }

    newVault = new NewVaultController()
    readVault = new ReadVaultController()
    allVaults = new AllVaultsController()

    config() {
        this.router.post('/new', this.newVault.create)
        this.router.post('/read', this.readVault.read)
        this.router.get('/all', this.allVaults.list)
    }

    getRoutes() { 
        return this.router
    }
}