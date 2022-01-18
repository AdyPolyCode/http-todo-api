const db = require('./db');

module.exports = async () => {
    try {
        await db.sync({ force: false, logging: console.log });

        console.log('Successfully connected to the database');
    } catch (error) {
        console.log(error.stack);
        process.exit(1);
    }
};
