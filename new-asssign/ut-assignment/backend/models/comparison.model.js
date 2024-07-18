const mongoose = require('mongoose');

const ComparisonSchema = new mongoose.Schema({
    month: {
        type: String,

    },
    lastYear: {
        type: Number,

    },
    thisYear: {
        type: Number,

    }
});

const ComparisonModel = mongoose.model('comparison', ComparisonSchema);

module.exports = {
    ComparisonModel
}
