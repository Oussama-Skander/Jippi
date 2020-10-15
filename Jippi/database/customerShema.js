const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const Customer = sequelize.define(
  "Customer",
  {
    first_Name: sequelize.STRING,
    last_Name: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    avatar: sequelize.STRING,
    adress: sequelize.STRING,
  },
  {
    tableName: "Customer_table", // this will define the table's name
  }
);

module.exports =  Customer;