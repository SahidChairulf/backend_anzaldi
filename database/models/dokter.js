'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokter.hasMany(models.Consultations, { foreignKey: 'doctorID' });
    }
  }
  Dokter.init({
    fullname: DataTypes.STRING,
    specialization: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    addrees: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};