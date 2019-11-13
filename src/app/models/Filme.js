const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

class Filme extends Model {}
Filme.init(
  {
    titulo: DataTypes.STRING,
    ano: DataTypes.STRING,
    diretor: DataTypes.STRING
  },
  { sequelize, modelName: "Filme", timestamps: false }
);

module.exports = Filme;
