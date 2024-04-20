'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserComplaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserComplaint.init({
    user_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    screenshots: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserComplaint',
    tableName: process.env.DB_TABLE_PREFIX+'user_complaints'
  });
  return UserComplaint;
};