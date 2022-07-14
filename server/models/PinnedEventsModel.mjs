export default function initPinnedEventsModel(sequelize, DataTypes) {
  return sequelize.define(
    "PinnedEvents",
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
    },
    {
      timestamps: false,
    },
  );
}
