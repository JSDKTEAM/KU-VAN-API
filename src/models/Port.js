module.exports = (sequelize, Sequelize) => {
  const Port = sequelize.define("Port", {
    port_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });
  return Port;
}