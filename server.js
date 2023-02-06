const express = require('express')
require('dotenv').config()

const app = express()
let port = 5000
console.log(process.env.API_KEY )

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})