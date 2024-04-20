'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDocument.init({
    user_id: DataTypes.BIGINT,
    document_type: DataTypes.STRING,
    document_number: DataTypes.BIGINT,
    document_expiry: DataTypes.DATE,
    document_front: DataTypes.STRING,
    document_backend: DataTypes.STRING,
    document_status: DataTypes.ENUM('pending','approved','rejected')
  }, {
    sequelize,
    modelName: 'UserDocument',
    tableName: process.env.DB_TABLE_PREFIX+'user_documents'
  });
  return UserDocument;
};