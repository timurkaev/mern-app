const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const PORT = config.get('port') || 5000
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()

app.use(corsMiddleware)

app.use(express.json())

app.use('/api/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'));
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch(e) {
        console.log("Server error", e.message);
        process.exit(1)
    }
};

start()

