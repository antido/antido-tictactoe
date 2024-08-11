const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDB, getDB } = require('./db/connection')

const app = express()
const port = 3000

// Cors Option
const corsOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//serving public file
app.use(express.static(__dirname))

// DB Connection
let db

connectToDB((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
        db = getDB()
    }
})