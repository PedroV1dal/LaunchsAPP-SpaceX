const mongoose = require('mongoose');

const coresSchema = new mongoose.Schema({
    core: String,
    flight: Number,
    gridfins: Boolean,
    legs: Boolean,
    reused: Boolean,
    landing_attempt: Boolean,
    landing_success: Boolean,
    landing_type: String,
    landpad: String
});

module.exports = coresSchema;