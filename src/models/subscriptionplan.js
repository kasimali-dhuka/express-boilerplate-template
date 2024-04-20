'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubscriptionPlan.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    interval: DataTypes.ENUM('weekly','monthly','yearly'),
    features: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SubscriptionPlan',
    tableName: process.env.DB_TABLE_PREFIX+'subscription_plans'
  });
  return SubscriptionPlan;
};