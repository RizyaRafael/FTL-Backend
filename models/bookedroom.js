'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookedRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookedRoom.belongsTo(models.MeetingRoom, {foreignKey: "MeetingRoom_ID"})
      // define association here
    }
  }
  BookedRoom.init({
    unit: DataTypes.STRING,
    MeetingRoom_ID: DataTypes.INTEGER,
    meetingDate: DataTypes.DATE,
    time: DataTypes.STRING,
    totalParticipant: DataTypes.STRING,
    foodType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookedRoom',
  });
  return BookedRoom;
};