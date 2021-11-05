const  { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


// request(url , (error , response, body)=> {
//   const breed = body && JSON.parse(body)[0];
  
  
//     if (error) {
//       console.log("error has occured")
//        console.log(error)
    
//   } else if(breed) {
//    console.log(breed.description)
//   } else  {
//   console.log('breed doesnt exist')
//   }
// }

