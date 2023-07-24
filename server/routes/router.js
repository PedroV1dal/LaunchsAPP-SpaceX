const express = require('express');
const { getAllLaunches } = require('../controllers/launchController');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Fullstack Challenge 🏅 - Space X API" });
})

router.get('/launches', async (req, res) => {
    const launches = await getAllLaunches();
    res.json(launches);
})

module.exports = router;