export default function initThreadsModel(sequelize, DataTypes) {
  return sequelize.define("Threads", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    announcementsId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Announcements",
        key: "id",
      },
    },
    forumsId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Forums",
        key: "id",
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    details: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}
