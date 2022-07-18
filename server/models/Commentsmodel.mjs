export default function initCommentsModel(sequelize, DataTypes) {
  return sequelize.define("Comments", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    threadId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Threads",
        key: "id",
      },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reply: {
      type: DataTypes.INTEGER,
      references: {
        model: "Comments",
        key: "id",
      },
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    details: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}
