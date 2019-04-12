'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reserve',{
      reserve_id : {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
      },
      user_id : {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: { model: 'User', key: 'user_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      time_id : {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: { model: 'Time', key: 'time_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nameWalkIn:{
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      phoneNumberWalkIn:{
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      destination: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      comment : {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reserve');
  }
};
