'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    role: DataTypes.ENUM('user','provider','admin'),
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_photo: DataTypes.STRING,
    leads: DataTypes.INTEGER,
    subscription_id: DataTypes.BIGINT,
    subscription_start_date: DataTypes.DATE,
    subscription_end_date: DataTypes.DATE,
    gender: DataTypes.ENUM('male','female','trans','other'),
    referred_by: DataTypes.BIGINT,
    referral_code: DataTypes.STRING,
    kyc_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: process.env.DB_TABLE_PREFIX+'users'
  });
  return User;
};