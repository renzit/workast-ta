const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', list);
router.post('/', insert);
router.put('/', update);
router.delete('/', remove);


function list(req, res) {
    Controller.list()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function insert(req, res) {
    Controller.insert(req.body)
        .then((article) => {
            response.success(req, res, article, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function update(req, res) {
    Controller.update(req.body)
        .then((article) => {
            response.success(req, res, article, 204);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function remove(req, res) {
    Controller.remove(req.body)
        .then((article) => {
            response.success(req, res, article, 204);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}



module.exports = router; 