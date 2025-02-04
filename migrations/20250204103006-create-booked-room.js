'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookedRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING
      },
      MeetingRoom_ID: {
        type: Sequelize.INTEGER,
        references: {
          model:'MeetingRooms',
          key:'id'
        }
      },
      meetingDate: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.STRING
      },
      totalParticipant: {
        type: Sequelize.STRING
      },
      foodType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookedRooms');
  }
};