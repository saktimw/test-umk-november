const express = require("express");
const router = express.Router();
const mysql = require('mysql2/promise');

router.get('/', async (req, res) => {

    // koneksi ke database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mahasiswa',
    });

    // ambil data nilai dari database
    const [results, fields] = await connection.query(`SELECT * FROM nilai_siswa`)
    const [results1, fields1] = await connection.query(`SELECT nilai_tahun FROM nilai_siswa GROUP BY nilai_tahun ORDER BY nilai_tahun`)
    
    let thead;
    let tbody;
    results1.forEach((val, key) => {
        thead += `<td>${val}</td>`
        const nama = results.filter((f) => f.nilai_tahun === val.nilai_tahun );
        
        nama.forEach((nm) => {
            const nma = results.filter((f) => f.nama_siswa === nm.nama_siswa)
            const nmMap = nma.map((v) => `<td>${v}</td>`)
            tbody += `<td>${nm}</td>` + nmMap
        })
    })

    return res.status(200).send(tbody)
})

module.exports = router;