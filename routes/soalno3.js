const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const obj = [
        {
            nama_kue: "donut",
            tipe: "Cake",
            rasa_rasa: [
                {
                    rasa: "regular",
                    toping: "Glazed",
                },
                {
                    rasa: "chocolate",
                    toping: "Maple",
                },
                {
                    rasa: "Blueberry",
                    toping: "Sugar",
                },
            ]
        },
        {
            nama_kue: "bar",
            tipe: "bar",
            rasa_rasa: [
                {
                    rasa: "Regular",
                    toping: "Chocolate",
                },
                {
                    rasa: "Regular",
                    toping: "Maple",
                },
            ]
        }
    ]
    return res.status(200).json(obj)
})

module.exports = router;