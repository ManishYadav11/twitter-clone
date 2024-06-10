const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: "../dbConfig/.env" }); 

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error in connection:', error);
    }
}

module.exports = { connectToMongoDb };
