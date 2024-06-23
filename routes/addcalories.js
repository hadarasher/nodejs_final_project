const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

// POST route to add new calorie entry
router.post('/', function(req, res, next) {
    console.log('Request Body:', req.body);
    const { user_id, year, month, day, description, category, amount } = req.body;

    const newCalories=new Calories({
        user_id,
        year,
        month,
        day,
        description,
        category,
        amount
    });

    newCalories.save()
        .then(function(ob) {
            console.log("Calories item created");
            res.send("Calories item saved successfully");
        })
        .catch(err => {
        console.error("Error saving calories:", err);
        next(err);
    });
});

// GET route to serve the HTML form using Pug
router.get('/', function(req, res) {
    console.log("Rendering addcalories form...");
    res.render('addcalories'); // Render the addcalories.pug file
});

module.exports = router;
