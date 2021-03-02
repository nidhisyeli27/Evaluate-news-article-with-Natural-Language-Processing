// Setup empty JS object to act as endpoint for all routes
const dotenv = require('dotenv')
dotenv.config()
var path = require('path');
const fetch = require('node-fetch')
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// Dependencies 
const bodyParser = require('body-parser')
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));
const host = 'localhost';
const port = 8000;

// Personal API Key for OpenWeatherMap API
const apiKey=process.env.API_KEY;
console.log("api key= "+apiKey)
const baseURL="https://api.meaningcloud.com/sentiment-2.1?key=";
// Spin up the server
const server = app.listen(port,host, listening);
 function listening(){
    
    console.log(`running on localhost: ${port}`);
  };
// Callback to debug
app.get('/', callBack);
// Initialize all route with a callback function
function callBack(req,res){
    res.sendFile('dist/index.html');    
  }


app.post("/add", async(req, res) => {
  console.log(`${baseURL}${apiKey}&lang=auto&url=${req.body.url}`);
  const apiData = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.url}`, {
      method: 'POST'
  });

  try {
      const data = await apiData.json();
      console.log(data)
      res.send(data);
  } catch (err) {
      console.log("error", err);
  }
});