const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/controller');

// routes.js
router.post('/api/weather', weatherController.addWeather);
router.post('/bulk', weatherController.bulkInsertWeather);
router.get('/weather/:city', weatherController.displayWeather);
router.get('/forecast/:city', weatherController.getForecast);
router.get('/all', weatherController.getAllWeather);
// ...existing code...

module.exports = router;
