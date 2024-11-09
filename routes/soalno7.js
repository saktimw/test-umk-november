const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

router.get('/', async (req, res) => {
    
    const prisma = new PrismaClient();

    const getData = await prisma.jo

    return res.status(200).send(result)
})

module.exports = router;