const request = require('request');
let breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = function(breedname, callback) {
  request(url , (error , response, body)=> {
    if (error) {
      callback(error, null);
    // console.log("error has occured")
    // console.log(error)
    }
    const breed = body && JSON.parse(body)[0];
    if (breed) {
      callback(null, breed.description);
    } else  {
      callback('breed doesnt exist');
    }

    // const data = JSON.parse(body);
    //     console.log(data[0].description)
  });
};

module.exports =  {fetchBreedDescription };

//console.log(typeof body)
//console.log(data);
//console.log(typeof data)