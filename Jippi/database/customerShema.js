const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const Customer = sequelize.define(
  "Customer", {
    first_Name: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {
    tableName: "Customer_table", // this will define the table's name
  }
);

module.exports = Customer;
