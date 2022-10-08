//get tour
exports.getTour = (async(req,res)=>{
    try{
      
       const filters = {...req.query}
         //sort, limit, page -> exclude
         const excludeFields = ['sort', 'page', 'limit']
         excludeFields.forEach(field => delete filters[field])

           /*---------------
                 Sort
             ---------------*/
         const queries = {}
         if(req.query.sort){
            const sortBy = req.query.sort.split(',').join()
            queries.sortBy = sortBy

         }

          /*---------------
           fields -> select
             ---------------*/
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
        }

           //pageination
           if(req.query.page){
            const {page=1, limit=3} = req.query
            const skip = (page-1)*parseInt(limit)
            queries.skip = skip
            queries.limit=parseInt(limit)
            
           }

         const tours = await getTourServices(filters, queries)

          /// success status//
        res.status(200).json({
            status:"success",
            data:tours
        })
    }
    catch(error){
       res.status(400).json({
        status:"fail",
        message:"can't get data",
        error:error.message
       })
    }
   
})

/*---------------------
   get tour by Id
----------------------*/
exports.getTourById = (async(req,res)=>{
  try{
    const {id} = req.params
    const result = await getTourByIdServices(id)
    res.status(200).json({
      status:"success",
      data:result
  })
  }
  catch(error){
    res.status(400).json({
     status:"fail",
     message:"can't get data by id",
     error:error.message
    })
 }
  
})


// create or save tour on databse

const { createTourServices, getTourServices, updateTourServices, bulkUpdateTourServices, getTourByIdServices, cheapestTourService, topViewedTourService } = require("../services/tour.services")

exports.createTour =  (async (req, res)=>{
   const result = await createTourServices(req.body)
    try{
      res.status(200).json({
        status:"success",
        message:"data inserted success",
        data:result

      })     
    }

    catch(error){
       res.status(400).json({
        status:"fail",
        message:"data isn't inserted",
        error:error.message
       })
    }
})


/* ---------------------------
 update tour => patch controler
----------------------------*/
exports.updateTourById = (async(req,res)=>{
    try{
        const{ id} = req.params
        const result = await updateTourServices(id, req.body)

        res.status(200).json({
        status:"success",
        message:"data updated successfully",
        data:result
       })

    }
    catch(error){
        res.status(400).json({
            status:"fail",
            message:"data couldn't successfully updated",
            error:error.message
        })
    }

})



//// cheapest tour///
exports.cheapestTour = (async(req, res)=>{
  try{
    
    // const {price} = req.body
    const result = await  cheapestTourService(req.body)
    console.log( result)
    
    res.status(200).json({
      status:"success",
      message:"data updated successfully",
      data:result
     })
  }
  catch(error){
    res.status(400).json({
      status:"fail",
      message:"data couldn't successfully updated",
      error:error.message
  })
  }
})

