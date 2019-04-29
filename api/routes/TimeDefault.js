const express = require('express');
const router = express.Router();
const controller = require('../controller/TimeDefaultController');
const checkAuthAdmin = require('../middleware/check-auth-admin');

router.get('/ports/:port_id',checkAuthAdmin, controller.getTimeDefaultByPortId);

module.exports = router;