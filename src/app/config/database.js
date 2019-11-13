const { Sequelize, Model, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("PORTALB2B", "oib2b", "oib2bSQ@", {
  host: "SRVSQLFB2",
  schema: "filmes",
  dialect: "mssql"
});

sequelize
  .authenticate()
  .then(() => console.log("sucesso"))
  .catch(err => console.log("erro", err));

module.exports = sequelize;
