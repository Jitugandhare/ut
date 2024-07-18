const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    date: {
        type: String

    },
    websales: {
        type: Number,

    },
    offlinesale: {
        type: Number,

    }
});

const DeviceonModel = mongoose.model('devicedata', deviceSchema);

module.exports = {
    DeviceonModel
}
