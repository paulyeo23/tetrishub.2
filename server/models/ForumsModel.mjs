export default function initForumsModel(sequelize, DataTypes) {
  return sequelize.define("Forums", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    subName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    details: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}
