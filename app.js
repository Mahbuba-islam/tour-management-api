const express = require('express');
const cors = require('cors');

const app = express()
const tourRoute = require('./routes/tour.route')

//middleware

app.use(cors())
app.use(express.json())


// rote api
app.get('/', (req, res) =>{
    res.send('Running server succesfully')
})


app.use('/api/v1/tour', tourRoute)
module.exports = app