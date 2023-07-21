const mongoose = require('mongoose');
const linksSchema = require("./LinksSchema")
const coresSchema = require("./coresSchema");

const launchSchema = new mongoose.Schema({
    fairings: Object,
    links: linksSchema,
    static_fire_date_utc: String,
    static_fire_date_unix: Number,
    tdb: Boolean,
    net: Boolean,
    window: Number,
    rocket: String,
    success: Boolean,
    failures: Array,
    details: String,
    crew: Array,
    ships: Array,
    capsules: Array,
    payloads: Array,
    launchpad: String,
    auto_update: Boolean,
    flight_number: Number,
    name: String,
    date_utc: String,
    date_unix: Number,
    date_local: String,
    date_precision: String,
    upcoming: Boolean,
    cores: [coresSchema],
    id: String,
});

const Launch = mongoose.model('Launch', launchSchema);

module.exports = Launch;