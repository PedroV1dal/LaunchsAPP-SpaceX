const axios = require('axios');
const Launch = require('../models/launchSchema')

async function fetchLaunchedData() {
    try {
        const response = await
        axios.get('https://api.spacexdata.com/v4/launches')

        const launches = response.data;

        console.log(`Fetched ${launches.length} launches from SpaceX API`);

        for (let launch of launches) {
            const existingLaunch = await Launch.findOne({ id: launch.id });
            
            if(!existingLaunch) {
                await Launch.create(launch);
            };
        }

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = fetchLaunchedData;