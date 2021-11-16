const express = require("express");
require('dotenv').config();
const app = express(); //app is an object
//include the method-override package
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const routes = require('./routes');
const port = 3000;
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/user', routes.user);
// app.use('/movie', routes.movie);

app.listen(3000, () => {
    console.log(`Server running on port: ${port}`);
  });