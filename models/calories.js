const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaloriesSchema = new Schema({
    user_id: {
        type:String
    },
    year: {
        type:Number
    },
    month: {
        type:Number
    },
    day: {
        type:Number
    },
    id: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    amount: {
        type: Number
    }
});

const calories = mongoose.model('Calories', CaloriesSchema);

module.exports = calories;