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
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

//middleware
app.use(cors());
app.use(express.json());
app.use('/users', routes.users);
app.use('/movies', routes.movies);

app.listen(3000, () => {
    console.log(`Server running on port: ${port}`);
  });