const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const colors = require('colors')
const app = require("./app");

//database connect 
mongoose.connect(process.env.DATABASE_CONNECT).then(()=>{
   console.log(`Database connection is successful`.green.bold)
})

const port = process.env.PORT||5000

app.listen(port, ()=>{
  console.log(`App is running on port ${port}`.yellow.bold)
})




