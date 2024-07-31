module.exports = (sequelize, Sequelize) => {
    const EnroledStudentsType = sequelize.define
    ('enroled_students_type', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: user,
          key: 'id',
        },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: course,
            key: 'id',
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
        tableName: "courses",
      }
    );
    return EnroledStudentsType;
  };