const express = require('express');
const router = express.Router();

const controller = require('../controller/users');
const checkAuth = require('../middleware/check-auth');
const db = require('../../connection');

router.get('/', controller.getAllUser);

router.post('/', controller.addUser);

module.exports = router;