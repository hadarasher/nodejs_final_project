/*
Developers:
* Gal Kalev 318657632
* Hadar Asher 207767005
 */

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
},{versionKey: false});

module.exports = mongoose.model('users', UserSchema);