const express = require('express');
const router = express.Router();
const controller = require('../controller/PortController');
const checkAuthAdmin = require('../middleware/check-auth-admin');

router.get('/',checkAuthAdmin,controller.getAllPort);

module.exports = router;