const express = require('express');
const cors = require("cors");
const server = express();
require('dotenv').config()

const cron = require('node-cron');
const fetchLaunchedData = require('./api/fetchData');
const routes = require('./routes/router');

// cron.schedule("0 9 * * *", fetchLaunchedData, {
//     scheduled: true,
//     timezone: "America/Sao_Paulo"
// });

server.use(cors());
server.use(express.json());

//DB Connection 
const conn = require("./db/conn");
conn();

server.use('/', routes);

server.listen(process.env.PORT, function () {
    console.log("Server on");
})
