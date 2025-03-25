import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 47953

class InternalServer {
    loadServer() {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    }
}

export default new InternalServer().loadServer()