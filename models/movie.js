'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  };
  Movie.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    rating: DataTypes.STRING,
    runtime: DataTypes.STRING,
    genre: DataTypes.STRING,
    actors: DataTypes.STRING,
    plot: DataTypes.STRING,
    poster: DataTypes.STRING,
    box_office: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};