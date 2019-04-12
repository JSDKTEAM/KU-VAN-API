'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Schedule', { 
      schedule_id :{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
      },
      port_id : {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: { model: 'Port', key: 'port_id' },
        onUpdate: 'SET NULL',
        onDelete: 'CASCADE',
      }
     });
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Schedule');
  }
};
