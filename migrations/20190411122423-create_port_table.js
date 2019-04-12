'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Port',
      {
        port_id : {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey : true,
        },
        name : {
          type: Sequelize.STRING(100),
          allowNull: false,
        }
      }
    );
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Port');
  }
};
