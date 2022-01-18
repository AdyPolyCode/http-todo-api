const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Todo extends Model {}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: true, validate: true, sequelize: db, modelName: 'Todo' }
);

module.exports = Todo;
