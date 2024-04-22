'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Consultations.belongsTo(models.Users, { foreignKey: 'pasientID' });
      Consultations.belongsTo(models.Dokter, { foreignKey: 'doctorID' });
    }
  }
  Consultations.init({
    consultation_notes: DataTypes.STRING,
    doctorID: DataTypes.INTEGER,
    pasientID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consultations',
  });
  return Consultations;
};