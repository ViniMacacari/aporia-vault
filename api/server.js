import express from 'express'
import cors from 'cors'

import { VaultsRoutes } from './routes/vaults.js'
import { BitcoinRoutes } from './routes/bitcoin.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 47953

class InternalServer {
    vaults = new VaultsRoutes()
    bitcoin = new BitcoinRoutes()

    loadServer() {
        app.use('/vaults', this.vaults.getRoutes())
        app.use('/bitcoin', this.bitcoin.getRoutes())

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    }
}

export default new InternalServer().loadServer()