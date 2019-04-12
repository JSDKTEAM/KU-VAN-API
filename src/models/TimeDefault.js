const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const TimeDefault = sequelize.define("TimeDefault", {
    time_default_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    schedule_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: { model: 'Schedule', key: 'schedule_id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    time_out: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
  }, {
      timestamps: false,
      freezeTableName: true
    });
  return TimeDefault;
};