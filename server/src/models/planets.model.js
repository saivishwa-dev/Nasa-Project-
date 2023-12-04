const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const habitablePlanets = [];

// another way of giving the file path
// const filePath = 'C:\\Users\\happy\\desktop\\nasa\\server\\src\\data\\kepler_data.csv';

//we are using the javascript promises here which are used for asynchronous coding 
function loadplanetsdata(){
  return new Promise ((resolve,reject)=>{
    function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
      && planet['koi_insol'] > 0.36 
      && planet['koi_insol'] < 1.11
      && planet['koi_prad'] < 1.6;
  }
  
  fs.createReadStream(path.join(__dirname,'..','data','kepler_data.csv'))
    .pipe(parse({
      comment: '#',
      columns: true,
    }))
    .on('data', (data) => {
      if (isHabitablePlanet(data)) {
        habitablePlanets.push(data);
      }
    })
    .on('error', (err) => {
      console.log(err);
      reject(err);
    })
    .on('end', () => {
      console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name'];
      }));
      console.log(`${habitablePlanets.length} habitable planets found!`);
      resolve();
    });
  })
}


module.exports = {
  loadplanetsdata,
    planets: habitablePlanets
};