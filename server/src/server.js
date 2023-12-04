const app = require('./app');

const http = require('http');


const PORT = process.env.PORT ||8000;

const server = http.createServer(app);

const {loadplanetsdata} = require('./models/planets.model');

async function startServer(){
    await loadplanetsdata();

    server.listen(PORT, ()=>{
        console.log(`Server is up and running on port ${PORT}`)
    })
}

startServer();
