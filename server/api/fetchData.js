const axios = require('axios');
const Launch = require('../models/launchSchema')
const conn = require('../db/conn');

conn();

async function getRocketName(rocketId) {
    try {
        const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        return response.data.name; // Return the name of the rocket
    } catch (error) {
        console.error(`Error fetching rocket name: ${error}`);
        return null;
    }
}

async function fetchLaunchedData() {
    try {
        const response = await
            axios.get('https://api.spacexdata.com/v4/launches')

        const launches = response.data;

        console.log(`Fetched ${launches.length} launches from SpaceX API`);

        for (let launch of launches) {

            launch.rocketName = await getRocketName(launch.rocket);

            let existingLaunch = await Launch.findOne({ id: launch.id });

            if (!existingLaunch) {
                await Launch.create(launch);
            } else {
                await Launch.findOneAndReplace({ id: launch.id }, launch);
            }
        }

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

fetchLaunchedData();
//module.exports = fetchLaunchedData;