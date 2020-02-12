const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');
const article = require('./components/article/network');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const store = require('../../../store/mongo');
const config = require('../../../config');

const dbconf = {
    host: config.mongodb.host,
    user: config.mongodb.user,
    password: config.mongodb.password,
    dbName: config.mongodb.database,
};

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// << db init >>
store.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});

// ROUER
app.use('/api/user', user);
app.use('/api/article', article);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log('API Listen on port 3000 ', config.api.port);
}); 