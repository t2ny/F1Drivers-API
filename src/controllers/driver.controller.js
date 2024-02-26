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

    } catch (error) {
        console.log(error);
    }
}

const searchDrivers = async (req, res) => {
    try {

        if (req.query.name) {
            return searchDriversByName(req, res);
        }

        return res.status(400).json({ message: 'No search criteria provided' });

    } catch (error) {
        console.log(error);
    }
}

const searchDriversByName = async (req, res) => {
    try {

        const wordArray = req.query.name.split(" ");
        const drivers = await Driver.find().exec();

        const filteredDrivers = drivers.filter(driver => {
            return wordArray.includes(driver.firstName.toLowerCase()) ||
                wordArray.includes(driver.lastName.toLowerCase());
        })

        return res.status(200).json(filteredDrivers);

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    getAllDrivers,
    searchDrivers
}