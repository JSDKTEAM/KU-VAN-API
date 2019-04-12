
module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("Schedule", {
    schedule_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    port_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: { model: 'Port', key: 'port_id' },
      onUpdate: 'SET NULL',
      onDelete: 'CASCADE',
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });
  return Schedule;
};