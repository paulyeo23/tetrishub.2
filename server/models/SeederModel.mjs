export default function initSeedModel(sequelize, DataTypes) {
  return sequelize.define(
    "Seeders",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      averageof: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      seedingMethod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      open: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      finalised: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    },
  );
}