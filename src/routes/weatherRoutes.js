const express = require('express');
const router = express.Router();
const weatherController = require('../Controllers/weatherController');

router.get('/weather', weatherController.getWeather);

module.exports = router;