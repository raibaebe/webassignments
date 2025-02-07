const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        // Your code here
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;