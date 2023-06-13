const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class User extends Model {}

User.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    user: {
      type: DataTypes.STRING, allowNull: false
    },
    password: {
      type: DataTypes.STRING, allowNull: false
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;