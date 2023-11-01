const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// route - /photoBook

// GET - /photobook
router.get('/', (req, res) => {
    console.log(`GET /photoBook request made`);

    let sqlText = `SELECT * FROM "photobook";`;

    pool.query(sqlText).then((result) => {
        console.log(`GET /photoBook success!`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error GET /photoBook`);
        res.sendStatus(500);
    });
});


// POST

// PUT

// DELETE

module.exports = router;
