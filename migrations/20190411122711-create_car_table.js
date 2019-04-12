'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Car', {
      car_id :{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
      },
      port_id : {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: { model: 'Port', key: 'port_id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      license_plate : {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      province : {
        type: Sequelize.STRING(20),
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('car');
  }
};
