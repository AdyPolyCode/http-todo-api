const { Sequelize } = require('sequelize');
const { join } = require('path');

module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: join(__dirname, 'db.sqlite'),
});
