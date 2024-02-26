const mongoose = require('mongoose');
const Driver = require('../models/driver');

/**
 * GET: api/drivers
 * @param {*} req 
 * @param {*} res 
 */
const getAllDrivers = async (req, res) => {
    try {

        const drivers = await Driver.find().exec();
        return res.status(200).json(drivers);

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllDrivers
}