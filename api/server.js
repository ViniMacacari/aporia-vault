import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

import { VaultsRoutes } from './routes/vaults.js'
import { BitcoinRoutes } from './routes/bitcoin.js'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 47953

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const upload = multer({
    dest: path.join(__dirname, '../tmp')
})

app.post('/upload/aporia', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' })
    }

    res.json({ filePath: req.file.path })
})

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