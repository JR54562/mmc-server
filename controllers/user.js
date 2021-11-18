const User = require("../models").User;
const Movie = require("../models").Movie;

const signup = (req, res) => {
  User.create(req.body).then((newUser) => {
    res.json(newUser);
  });
};

const login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  }).then((foundUser) => {
    console.log(foundUser);
    res.json(foundUser);
  });
};
//Show the User Profile page
const renderProfile = (req, res) => {
  User.findByPk(req.params.index, {
    include: [
      {
        model: Movie,
      },
    ],
  }).then((userProfile) => {
    res.json(userProfile);
  });
};

const editProfile = (req, res) => {
    console.log('editing profile', req.body);
  User.update(req.body, {
    where: {
      id: req.params.index,
    },
    returning: true,
  }).then((updatedUser) => {
    res.json(updatedUser);
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
  signup,
  login,
  renderProfile,
    editProfile,
    getAllMovies
};
