const express = require("express");
const app = express();
const config = require('../../../config');

const dbconf = {
    host: config.mongodb.host,
    user: config.mongodb.user,
    password: config.mongodb.password,
    dbName: config.mongodb.database,
};

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
app.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("../store/mongo");
const dbName = config.mongodb.database;
const collectionName = "movies";

// << db init >>

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});