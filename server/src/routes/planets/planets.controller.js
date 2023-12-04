//requiring the planets data 
const {planets} = require('../../models/planets.model');

//setting the function to get all the planets 
function getAllplanets(req,res){
    return res.status(200).json(planets)
}

//exporting the module
module.exports ={ 
    getAllplanets,
}