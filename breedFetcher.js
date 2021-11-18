const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search";
const input = process.argv.slice(2);
const fullUrl = url + "?q=" + input;

request(fullUrl, (error, response, body) => {
  if (error) {
    console.log(`Fail to load the website: ${error}`);
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`Sorry, can not find the breed`);
  } else {
    console.log(data[0]);
  }
});
