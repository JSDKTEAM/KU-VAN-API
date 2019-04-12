const express = require('express');
const router = express.Router();
const controller = require('../controller/PortController');
const checkAuth = require('../middleware/check-auth');

router.get('/',controller.getPortById);

module.exports = router;