const request = require('request');
let breed = process.argv[2]
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`


request(url , (error , response, body)=> {
const breed = body && JSON.parse(body)[0];


  if (error) {
    console.log("error has occured")
    console.log(error)
  
} else if(breed) { 
 console.log(breed.description) 
} else  {
console.log('breed doesnt exist')
}

// const data = JSON.parse(body);
//     console.log(data[0].description)
});  



//console.log(typeof body)
//console.log(data);
//console.log(typeof data)