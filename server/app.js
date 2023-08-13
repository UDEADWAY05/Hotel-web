const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

const port = config.get('port') ?? 8080

//user: UDEADWAY
//pass: hw-deadway-1234

async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        await mongoose.connect(config.get('mongoUri'))
        console.log(chalk.green('MongoDB connected.'))
        app.listen(port, () => {
            console.log(chalk.green(`Server has been started on port ${port}...`))
        })
    } catch (error) {
        console.log(chalk.red(error.message))
        process.exit(1)
    }

}

start()