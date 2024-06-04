const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "user",
      {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        user_type_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,  
          unique: false,
          references: {
            model: 'user_type',
            key: 'id'
          }
        },
        user_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        term: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
        },
        credits: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        phone_numer :{
            type: Sequelize.STRING,
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

        // Function that hashes the password before saving it to the database
        User.beforeCreate(async (user, options) => {
            if (user.password) {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        });
    
        User.beforeUpdate(async (user, options) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        });
    
        // Function that compares the password with the hashed password in the database
        User.prototype.authenticate = function (password) {
            return bcrypt.compare(password, this.password);
        }
        

    return User;
  };
  