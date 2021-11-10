'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001',
        rating: 'PG-13',
        runtime: '178 min',
        genre: 'Action, Adventure, Drama',
        actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
        plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
        box_office: '$315,710,750'
      },
      {
        title: 'The Lord of the Rings: The Two Towers',
        year: '2002',
        rating: 'PG-13',
        runtime: '179 min',
        genre: 'Action, Adventure, Drama',
        actors: 'Elijah Wood, Ian McKellen, Viggo Mortensen',
        plot: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        box_office: '$342,551,365'
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: '2003',
        rating: 'PG-13',
        runtime: '201 min',
        genre: 'Action, Adventure, Drama',
        actors: 'Elijah Wood, Viggo Mortensen, Ian McKellen',
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        box_office: '$377,845,905'
      }
    ], {});
  },



  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
