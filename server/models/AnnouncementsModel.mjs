export default function initAnnouncementsModel(sequelize, DataTypes) {
  return sequelize.define(
    "Announcements",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Events",
          key: "id",
        },
      },
      orgId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        model: "Organisations",
        key: "id",
      },
      details: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );
}
