module.exports = (sequelize, Sequelize) => {
    const Courses_detail = sequelize.define(
        "courses_detail",
      {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
          },
        course_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,  
            unique: false,
            references: {
              model: 'course',
              key: 'id'
            }
          },
        user_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,  
            unique: false,
            references: {
              model: 'user',
              key: 'id'
            }
          },  
        started_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        finished_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        is_finished: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        credits_obtained: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        assistance: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
  