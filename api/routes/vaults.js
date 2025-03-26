import { Router } from "express"
import { NewVaultController } from "../controllers/vaults/new-vault.js"

export class VaultsRoutes {
    router = Router()

    constructor() {
        this.config()
    }

    newVault = new NewVaultController()

    config() {
        this.router.post('/new', this.newVault.create)
    }

    getRoutes() { 
        return this.router
    }
}