const express = require("express");
const router = express.Router()
const tourControlers = require('../Controlers/tour.controler');
const viewCount = require("../middleware/tour.viewCount");
router
.route('/')
.get(tourControlers.getTour)
.post(tourControlers.createTour)
 


//cheapest tour
router
.route('/cheapest')
.get(tourControlers.cheapestTour)


  //id
router
.route('/:id')
.get(viewCount,tourControlers.getTourById)
.patch(tourControlers.updateTourById)
 


module.exports = router