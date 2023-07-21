const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Fullstack Challenge 🏅 - Space X API"});
})

module.exports = router;