const express = require('express');
const router = express.Router();

const members= [
    {
        "firstname": "Hadar",
        "lastname": "Asher",
        "id": "207767005",
        "email": "hadarasher99@gmail.com"
    },
    {
        "firstname": "Gal",
        "lastname": "Kalev",
        "id": "xxxxxxxxx",
        "email": "galk2508@gmail.com"
    }
]
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About the Team' , members:members});
});

module.exports = router;
