'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Consultations, { foreignKey: 'pasientID' });
    }
  }
  const ENUM_VAL = ['user' , 'admin']
  Users.init({
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ENUM_VAL,
      allowNull: false,
      defaultValue: 'user',
      validate: {
        notNull: {msg: "role is required"},
        isIn:{
          args: [ENUM_VAL],
          msg: "Role must be user and admin"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};