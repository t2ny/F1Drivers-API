const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    currentTeam: {
        type: String,
        required: false
    },
    nationality: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    championships: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;