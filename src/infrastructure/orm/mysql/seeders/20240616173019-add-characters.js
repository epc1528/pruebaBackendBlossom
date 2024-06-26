'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('character', [
      {
        "id": 1,
        "name": 'Rick Sanchez',
        "status": 'Alive',
        "species": 'Human',
        "type": "",
        "gender": 'Male',
        "comment":'',
        "image": 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      },
      {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      },
      {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      },
      {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      },
      {
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      },
      {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      },
      {
        "id": 11,
        "name": "Albert Einstein",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
      },
      {
        "id": 12,
        "name": "Alexander",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
      },
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "unknown",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
      },
      {
        "id": 14,
        "name": "Alien Morty",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
      },
      {
        "id": 15,
        "name": "Alien Rick",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
        "comment":'',
        "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
