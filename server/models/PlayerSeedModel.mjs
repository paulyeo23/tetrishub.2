
export default function initPlayerSeedModel(sequelize, DataTypes) {
  return sequelize.define(
    "PlayerSeeds",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },

      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "PlayerDetails",
          key: "id",
        },
      },
      seederId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Seeders",
          key: "id",
        },
      },
      seed: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    },
  );
}
