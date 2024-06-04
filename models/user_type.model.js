module.exports = (sequelize, Sequelize) => {
    const User_type = sequelize.define(
        "user_type",
      {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
          },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated_at:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
      }
    );
    return Courses_detail;
  };
  