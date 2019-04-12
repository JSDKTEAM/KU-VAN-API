const express = require('express');
const router = express.Router();
const controller = require('../controller/TimeController');

router.get('/', controller.getTimeByPortId);

module.exports = router;