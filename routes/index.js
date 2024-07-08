/*
Developers:
* Gal Kalev 318657632
* Hadar Asher 207767005
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
