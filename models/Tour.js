const mongoose = require('mongoose')
const app = require('../app')
const viewCount = require('../middleware/tour.viewCount')
console.log(viewCount)


//Schema design
const toursSchema = mongoose.Schema({
 
    name:{
        type:String,
        required:[true, 'please provide a name for this product'],
        trim:true,
        unique:[true, "Name must be unique"],
        minLength:[3, "Name must be atleast 3 chracters"],
        maxLength:[100, "Name is too large"],
    },

    description:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
        min:[0, "Price can't be nagetive"]
    },

    views:{
        type:Number,
        default:0,
       
       
    },

   
     
                status:{
                    type:String,
                    reguired:true,
                    enum:["available", "unavailable", "discontinued"]
                },

              
        

})


//model
const Tour = mongoose.model('Tour', toursSchema)

module.exports = Tour