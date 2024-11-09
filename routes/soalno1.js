const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    let result = "";
    let text = "";
    for (let i = 1; i < 200; i++) {
        switch(true) {
            // jika angka habis dibagi 8
            case (i % 8 === 0):
                text = `Angka ${i} = Benar \n`
                result += text;
            break;
            // // jika angka habis dibagi 4 dan 6
            case ((i % 4 === 0) && i % 6 === 0):
                text = `Angka ${i} = Salah \n`
                result += text;
            break;
            default:
                result += `Angka ${i} \n`

        }
        
    }
    return res.status(200).send(result)
})

module.exports = router;