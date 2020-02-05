const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');
const article = require('./components/article/network');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUER
app.use('/api/user', user);
app.use('/api/article', article);

app.listen(config.api.port, () => {
    console.log('API Listen on port 3000 ', config.api.port);
}); 