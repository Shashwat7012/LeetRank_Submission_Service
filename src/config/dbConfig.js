const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');

async function connectToDB() {
    try {
        if (NODE_ENV === 'development') {
            await mongoose.connect(ATLAS_DB_URL);
            console.log('Successfully connected to MongoDB');
        } else {
            throw new Error('Invalid NODE_ENV. Database connection not configured.');
        }
    } catch (error) {
        console.error('Unable to connect to the DB server:', error);
    }
}

module.exports = connectToDB;
