module.exports = (sequelize, Sequelize) => {
  let Reserve = sequelize.define("Reserve", {
    reserve_id: {
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
    time_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: { model: 'Time', key: 'time_id' },
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
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
      timestamps: true,
      freezeTableName: true
    }
  );

  Reserve.associate = (models) => {
    Reserve.belongsTo(models.Time, {
      foreignKey: 'time_id',
    });
  };
  return Reserve;
}