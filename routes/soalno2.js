const express = require("express");
const router = express.Router();

const olahA = (arr, params) => {
    let hasil; 
    arr.forEach((value, key) => {
        if (value.toLocaleLowerCase() !== params.toLocaleLowerCase() ) {
            hasil = [...arr, params]
        } else {
            hasil = "cocok"
        }
    });
    
    return hasil;
}

const olahB = (arr, params) => {
    let hasil; 
    arr.forEach((value, key) => {
        if (value.toLocaleLowerCase() === params.toLocaleLowerCase() ) {
            hasil = true
        } else {
            hasil = false
        }
    });
    
    return hasil;
}

const olahC = (arr, params) => {
    let hasil; 
    arr.forEach((value, key) => {
        if (value.toLocaleLowerCase() === params.toLocaleLowerCase() ) {
            hasil = `keynya = ${key}`
        } else {
            hasil = "Tidak ditemukan key"
        }
    });
    
    return hasil;
}
// array input
const dataArray = ["budi", "susi", "tono", "cika"];

router.get('/a/:cari', (req, res) => {
    const result = olahA(dataArray, req.params.cari)
    
    return res.status(200).send(result)
})

router.get('/b/:cari', (req, res) => {
    const dataArray = ["budi", "susi", "tono", "cika"];
    const result = olahB(dataArray, req.params.cari)
    
    return res.status(200).send(result)
})

router.get('/c/:cari', (req, res) => {
    const dataArray = ["budi", "susi", "tono", "cika"];
    const result = olahC(dataArray, req.params.cari)
    
    return res.status(200).send(result)
})

module.exports = router;