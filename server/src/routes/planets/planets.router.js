//requiring the express
const express = require('express');

//requiring the controlller 
// const planetsController = require('../planets/planets.controller');
//we can also write this code in as 
const {
    getAllplanets, 
} = require('./planets.controller') //if you use this we dont need to update at the get route of the planetRouter 

//setting the express router
const planetRouter = express.Router();

//adding the route
planetRouter.get('/planets',getAllplanets);

//exporting the module 
module.exports = planetRouter;
