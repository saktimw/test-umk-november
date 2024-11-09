const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secretKey = 'secretKey011'

router.post('/login', (req, res) => {
    let result;
    // data statis untuk cek login
    const datauser = {
        nama: "sakti mundra w",
        username: "root",
        password: "admin",
    }

    if ((req.body.username === datauser.username) && (req.body.password === datauser.password)) {
        // menggenerate token jwt
        const generateToken = jwt.sign(
            { nama: datauser.nama }, // data yang diencrypt kedalam token
            secretKey, // secret key jwt
            { expiresIn: '1d' } // mengatur expired token yang digenerate
        )

        result = {
            username: datauser.username,
            nama: datauser.nama,
            token: generateToken,
        }
    } else {
        result = {
            message: "Username / Password salah"
        }
    }

    return res.status(200).json(result)
})

router.get('/ceklogin', (req, res) => {
    const header = req.headers.authorization;
    let message = "";
    let code = 200;
    
    jwt.verify(header, secretKey, (err, decoded) => {
        if (err) {
            code = 403;
            message = "Token tidak valid"
        } else {
            message = `Login Berhasil - ${decoded.nama}`
        }
    })

    return res.status(code).send(message)
})

module.exports = router;