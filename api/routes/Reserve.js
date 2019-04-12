const express = require('express');
const router = express.Router();
const controller = require('../controller/ReserveController');

router.get('/', controller.getAllReserve);

module.exports = router;