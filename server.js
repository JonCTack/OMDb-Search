const express = require('express')
require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const path = require('path')

const app = express()
let port = 5000



app.use(cors('*/*'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'build')))

app.get('/get_movie/:movieString', async (req,res) => {
    let apiResponse = await axios(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    const data = apiResponse.data
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})