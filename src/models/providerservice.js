'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProviderService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProviderService.init({
    provider_id: DataTypes.BIGINT,
    service_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'ProviderService',
    tableName: process.env.DB_TABLE_PREFIX+'provder_services'
  });
  return ProviderService;
};