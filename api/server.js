import express from 'express'
import cors from 'cors'

import { VaultsRoutes } from './routes/vaults.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 47953

class InternalServer {
    vaults = new VaultsRoutes()

    loadServer() {
        app.use('/vaults', this.vaults.getRoutes())

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    }
}

export default new InternalServer().loadServer()