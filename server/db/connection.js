const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/tictactoe')
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                console.log(`Error encountered: ${err}`)
                return cb(err)
            })
    },
    getDB: () => dbConnection
}