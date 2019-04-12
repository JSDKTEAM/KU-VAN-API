module.exports = (sequelize, Sequelize) => {
  const Time = sequelize.define("Time", {
    time_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    car_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: { model: 'Car', key: 'car_id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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
    })

    Time.associate = (models) => {
      Time.hasMany(models.Reserve, {
        as: 'times',
      });
    };

  return Time;
};