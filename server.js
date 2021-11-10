const express = require("express");
const app = express(); //app is an object
//include the method-override package
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// const routes = require('./routes');
const port = 3000;

app.listen(3000, () => {
    console.log(`Server running on port: ${port}`);
  });