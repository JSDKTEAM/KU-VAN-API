const express = require('express');
const router = express.Router();
const controller = require('../controller/AuthController');

const checkAuth = require('../middleware/check-auth');
router.post('/login', controller.login);
router.get('/me',checkAuth,controller.getUserAccount);

module.exports = router;