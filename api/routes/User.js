const express = require('express');
const router = express.Router();
const controller = require('../controller/UserController');
const checkAuth = require('../middleware/check-auth');

router.post('/registers', controller.register);

module.exports = router;