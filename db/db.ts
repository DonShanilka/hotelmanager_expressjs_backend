const mysql = require('mysql2');
import dotenv from 'dotenv';

const db = mysql.creteConnection({
    url: process.env.DATABASE_URL,
});

// db.connect((err) => {
//     if (err) {

//     }
// })