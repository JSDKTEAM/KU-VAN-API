module.exports = (sequelize, Sequelize) => {
  const ReserveHistory = sequelize.define("ReserveHistory", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: { model: 'User', key: 'user_id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    nameWalkIn: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    phoneNumberWalkIn: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    destination: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    comment: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    time_out: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }, {
      timestamps: false,
      freezeTableName: true
    });
  return ReserveHistory;
};