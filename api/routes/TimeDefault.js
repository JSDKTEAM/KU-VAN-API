const express = require('express');
const router = express.Router();
const controller = require('../controller/TimeDefaultController');
const checkAuth = require('../middleware/check-auth');

router.get('/ports/:port_id',checkAuth, controller.getTimeDefaultByPortId);

module.exports = router;