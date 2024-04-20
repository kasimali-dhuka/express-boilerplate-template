'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestedServiceProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RequestedServiceProvider.init({
    rs_id: DataTypes.BIGINT,
    provider_id: DataTypes.BIGINT,
    offer_amt: DataTypes.DECIMAL(10,2),
    rating: DataTypes.TINYINT,
    status: DataTypes.TINYINT,
    otp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RequestedServiceProvider',
    tableName: process.env.DB_TABLE_PREFIX+'requested_service_provider'
  });
  return RequestedServiceProvider;
};