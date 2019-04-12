'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Time', {
      time_id : {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
      },
      car_id : {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: { model: 'Car', key: 'car_id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      time_out : {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      date : {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Time');
  }
};
