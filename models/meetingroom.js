'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetingRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MeetingRoom.hasMany(models.BookedRoom, {foreignKey: "MeetingRoom_ID"})
    }
  }
  MeetingRoom.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MeetingRoom',
  });
  return MeetingRoom;
};