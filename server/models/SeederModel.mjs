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
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      tierLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      averageOf: {
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
