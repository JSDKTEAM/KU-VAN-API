const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(10),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    fname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING(10),
      allowNull: false,
      unique: true,
    },
    type_user: {
      type: Sequelize.ENUM('ADMIN', 'CUSTOMER SUPPORT', 'CUSTOMER')
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });
  return User;
};