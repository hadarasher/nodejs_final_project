/*
Developers:
* Gal Kalev 318657632
* Hadar Asher 207767005
 */

const express = require('express');
const router = express.Router();

const members = [
    {
        'firstname': 'Hadar',
        'lastname': 'Asher',
        'id': 207767005,
        'email': 'hadarasher99@gmail.com'
    },
    {
        'firstname': 'Gal',
        'lastname': 'Kalev',
        'id': 318657632,
        'email': 'galk2508@gmail.com'
    }

];

router.get('/', (req, res) => {
    res.status(200).json(members);
});

module.exports = router;
