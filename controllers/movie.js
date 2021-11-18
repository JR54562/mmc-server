const User = require("../models").User;
const Movie = require("../models").Movie;

// Adding a movie to the database
const addMovie = (req, res) => {
  Movie.create(req.body).then((newMovie) => {
    res.json(newMovie);
  });
};

// Used to show a movie
const showMovie = (req, res) => {
  Movie.findByPk(req.params.index, {
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  }).then((foundMovie) => {
    console.log("found Movie", foundMovie.name);
    res.json(foundMovie);
  });
};

// One item will be deleted
const deleteMovie = (req, res) => {
  Movie.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.redirect("/songs");
  });
};

const getAllMovies = (req, res) => {
  console.log(Movie);
  Movie.findAll({
    where: {
      user_id: req.params.index,
    },
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  }).then((movie) => {
    res.json(movie);
  });
};

module.exports = {
  addMovie,
  showMovie,
  deleteMovie,
  getAllMovies,
};
