'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GlobalSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GlobalSetting.init({
    key: DataTypes.STRING,
    value: DataTypes.TEXT,
    user_type: DataTypes.ENUM('all','user','provider','admin')
  }, {
    sequelize,
    modelName: 'GlobalSetting',
    tableName: process.env.DB_TABLE_PREFIX+'global_settings'
  });
  return GlobalSetting;
};