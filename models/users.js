const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    birthday:{
        type: Date
    }
});

const users = mongoose.model('User', UserSchema);

module.exports = users;