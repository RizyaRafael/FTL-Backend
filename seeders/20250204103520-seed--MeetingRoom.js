'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [{
      name: "Ruang Timur A",
      capacity: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Ruang Timur B",
      capacity: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Ruang Selatan A",
      capacity: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Ruang Selatan B",
      capacity: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Ruang Utara",
      capacity: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('MeetingRooms', data, {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MeetingRooms', null, {})
  }
};
