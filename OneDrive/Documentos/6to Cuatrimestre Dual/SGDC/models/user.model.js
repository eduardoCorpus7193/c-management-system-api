const UserType = require('./user_type.model.js'); // Suponiendo que tienes el modelo de tipo de usuario

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: UserType,
        key: 'id',
      },
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    term: {
      type: Sequelize.INTEGER,
    },
    credits: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING(64),
    },
    phone_number: {
      type: Sequelize.STRING(20),
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
    },
});

return User;
}