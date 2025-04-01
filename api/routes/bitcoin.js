import { Router } from "express"
import { NewBitcoinAddressController } from "../controllers/bitcoin/new-address.js"

export class BitcoinRoutes {
    router = Router()

    constructor() {
        this.config()
    }

    newAddress = new NewBitcoinAddressController()

    config() {
        this.router.post('/new', this.newAddress.create)
    }

    getRoutes() { 
        return this.router
    }
}