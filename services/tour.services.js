const Tour = require("../models/Tour");
const viewCount = require("../middleware/tour.viewCount");

/* -----------------------
     get tour -> get request
     ---------------------------*/

exports.getTourServices = async (filters, queries) => {
  const tour = await Tour
    .find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return tour;
};

   /*---------------------
    get tour by ID services
  -------------------------*/
  exports.getTourByIdServices = async(id) =>{
    const result = await Tour.findById({_id:id})
    return result
  }
/* -----------------------
     create tour -> post request
     ---------------------------*/

exports.createTourServices = async (data) => {
  const tour = new Tour(data);
  const result = await tour.save();
  return result;
};

/* -----------------------
     update tour -> patch request
     ---------------------------*/

exports.updateTourServices = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

// cheapestTourService
exports.cheapestTourService = async()=>{
  
  const result = await Tour.find().sort({ price: 1 }).limit(3)
  console.log(result)
  return result
}

