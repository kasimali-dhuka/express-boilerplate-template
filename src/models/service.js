'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    parent_sid: DataTypes.BIGINT,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    icon: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Service',
    tableName: process.env.DB_TABLE_PREFIX+'services'
  });
  return Service;
};