module.exports = (sequelize, Sequelize) => {
    const Courses = sequelize.define(
        "courses",
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        cordinator_user_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,  
            unique: false,
            references: {
              model: 'course',
              key: 'id'
            }
        },
        class_name:{
            type: Sequelize.STRING,
            // allowNull: true,
        },
        schedule:{
            type: Sequelize.STRING,
            // allowNull: true,
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
    return Courses;
    };


    
