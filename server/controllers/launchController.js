const Launch = require('../models/launchSchema')

const getAllLaunches = async () => {
    return await Launch.find();
}

module.exports = {
    getAllLaunches
}