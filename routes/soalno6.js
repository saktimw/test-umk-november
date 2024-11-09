const express = require("express");
const router = express.Router();
const mysql = require('mysql2/promise');

// untuk akses ke soal no 6 A
router.get('/a', async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mahasiswa',
    });

    const [results, fields] = await connection.query(`SELECT * FROM users`);

    return res.status(200).json(results)
})

// untuk akses ke soal no 6 B
router.get('/b/:id', async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mahasiswa',
    });

    const [results, fields] = await connection.query(`SELECT * FROM users WHERE id_encrypted LIKE '%${req.params.id}%'`);

    return res.status(200).json(results)
})

module.exports = router;