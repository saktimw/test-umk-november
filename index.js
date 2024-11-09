const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { createServer } = require('http')
const soalno1 = require('./routes/soalno1.js')

app.use([
    cors(),
    express.urlencoded({
        extended: true
    }),
    express.json()
])

// fungsi untuk mengambil file dari folder routes menjadi route yang dipanggil
const targetDir = `${__dirname}/routes`;
const readdir = fs.readdirSync(targetDir); 
readdir.forEach((file) => {
    const routePath = `${targetDir}/${file}`;
    const route = require(routePath);
    const routeName = file.slice(0, -3)
    

    app.use(`/${routeName}`, route);
})


// host aplikasi kedalam port 2000
createServer(app).listen(2000, () => console.log("Connected"))