const mongoose = require("mongoose");
require('dotenv').config();

async function main() {

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database connection successful")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main