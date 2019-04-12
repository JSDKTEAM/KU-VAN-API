const express = require('express');
const router = express.Router();
const db = require('../../connection');
const controller = require('../controller/authentication');


router.post('/', controller.login)

module.exports = router;