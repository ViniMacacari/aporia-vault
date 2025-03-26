import { Router } from "express"
import { NewVaultController } from "../controllers/vaults/new-vault.js"
import { ReadVaultController } from "../controllers/vaults/read-vault.js"

export class VaultsRoutes {
    router = Router()

    constructor() {
        this.config()
    }

    newVault = new NewVaultController()
    readVault = new ReadVaultController()

    config() {
        this.router.post('/new', this.newVault.create)
        this.router.post('/read', this.readVault.read)
    }

    getRoutes() { 
        return this.router
    }
}