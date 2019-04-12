module.exports = (sequelize, Sequelize) => {
  let Time = sequelize.define("Time", {
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
    count_seat:{
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: 0
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
        as: 'time',
        foreignKey: 'time_id',
      });
    };

  return Time;
};