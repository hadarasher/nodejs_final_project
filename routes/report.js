const express = require('express');
const Calories = require('../models/calories');
const router = express.Router();

/* GET report page. */
router.get('/', async function(req, res, next) {
    const user_id = req.query.user_id;
    const year = req.query.year;
    const month = req.query.month;

    try{
        const categories = Calories.schema.path('category').enumValues;
        const report = {};

        // initialize the report with all categories
        categories.forEach(category => {
            report[category] = [];
        });

        const calorieEntries = await Calories.find({user_id,year, month});
        console.log(calorieEntries);
        calorieEntries.forEach(entry => {
            report[entry.category].push({
                day:entry.day,
                description:entry.description,
                amount:entry.amount
            });
        });

        res.json(report);
    } catch(err) {
        console.error("Error generatng report: ",err);
        next(err);
    }
});


module.exports = router;