'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestedService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RequestedService.init({
    user_id: DataTypes.BIGINT,
    service_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    budget: DataTypes.DECIMAL(10,2),
    with_material: DataTypes.BOOLEAN,
    images: DataTypes.TEXT,
    status: DataTypes.ENUM('pending','inprogress','completed')
  }, {
    sequelize,
    modelName: 'RequestedService',
    tableName: process.env.DB_TABLE_PREFIX+'requested_services'
  });
  return RequestedService;
};