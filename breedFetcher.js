const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  const fullUrl = url + breedName;
  
  request(fullUrl, (error, response, body) => {
    let desc;
    if (error) {
      callback(error, desc);
      return;
    } 
    
    if (body === '[]') {
      callback("No result", null);
    } else {
      desc = JSON.parse(body)[0]['description'];
      callback(null, desc);
    }
    
  });
};

module.exports = { fetchBreedDescription };
