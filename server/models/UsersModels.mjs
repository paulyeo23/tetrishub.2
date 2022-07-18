export default function initUsersModel(sequelize, DataTypes) {
  return sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    },
  );
}
