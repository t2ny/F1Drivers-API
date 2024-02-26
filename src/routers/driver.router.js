const express = require('express');
const router = new express.Router();
const DriverController = require('../controllers/driver.controller');

/**
 * Get all drivers
 */
router.get('/', DriverController.getAllDrivers);

module.exports = router;