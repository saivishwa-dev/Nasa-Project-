//requiring the express
const express = require('express');

//requiring the cors package 
const cors = require('cors');

//requiring the planets router 
const planetRouter = require('./routes/planets/planets.router');

//setting the express to the app
const app  = express();

//using the cors package 
app.use(cors({
    orgin:'http://localhost:3000/',
}))

//making the use data in json format 
app.use(express.json());

//using the planets router 
app.use(planetRouter);

//exporting the module
module.exports 