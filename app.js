// getting dependencies
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();

// getting the enviroment variables
const port = process.env.PORT || 9001;
mongo_uri = process.env.MONGO_URI;

// database connect and models
const connectDb = require('./connectDB/connectDB');
connectDb(mongo_uri);

// custom middlewares
app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(express.json());
app.use(
     express.urlencoded({
          extended: false,
     })
);
app.use(cookieParser());
app.use(
     cors({
          origin: "*"
     })
);

//  Route paths
const urlRoute = require('./routes/url')
const uploadRoute = require('./routes/upload')

// getting Routes
app.use('/api/url', urlRoute);
app.use('/api/upload', uploadRoute);

if (process.env.NODE_ENV === 'production') {
     app.use(express.static(__dirname + '/public/'));

     // handling client page routing
     app.get(/.*/, (req, res) => {
          res.sendFile(__dirname + '/public/index.html');
     })
}

// exporting the app.
module.exports = app;