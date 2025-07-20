const { CityServices } = require(`../services/index`)

const cityServices = new CityServices();

const create = async(req, res) => {
       try {
           const city = await cityServices.createCity(req.body);
           return res.status(201).json({
            data: city,
            success: true,
            messege: `Successfully created a City`,
            err: {}
           })
       } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messege: `Not able to create a city`,
            err: error
         });

       }
}

const destroy = async (req, res) => {
    try {
        const response = await cityServices.deleteCity(req.body);
           return res.status(201).json({
            data: response,
            success: true,
            messege: `Successfully deleted a City`,
            err: {}
        
    });
 } catch (error) {
      console.log(error);
      return res.status(200).json({
        data: {},
        success: false,
        messege: `Not able to delete a city`,
        err: error
     });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityServices.getCity(req.body);
           return res.status(200).json({
            data: response,
            success: true,
            messege: `Successfully fetched a City`,
            err: {}
        
    });
}   catch (error) {
      console.log(error);
      return res.status(200).json({
        data: {},
        success: false,
        messege: `Not able to get a city`,
        err: error
     });
    }
}

// Patch -> /city/:id -> req.body
const update = async(req, res) => {
    try {
        const response = await cityServices.updateCity(req.body);
           return res.status(200).json({
            data: response,
            success: true,
            messege: `Successfully updated a City`,
            err: {}
        
    });
 } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        messege: `Not able to update a city`,
        err: error
     });
}
}

module.exports = {
    create,
    destroy,
    get,
    update
}