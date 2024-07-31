module.exports = (sequelize, Sequelize) => {
  const CourseCatalog = sequelize.define
  ('course_catalog', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    }
  },     
    {
      timestamps: false,    
      freezeTableName: true,
      tableName: "course_catalog",
    }
  );

  return CourseCatalog;
}