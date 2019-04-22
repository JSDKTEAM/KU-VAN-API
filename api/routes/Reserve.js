const express = require('express');
const router = express.Router();
const controller = require('../controller/ReserveController');
const checkAuth = require('../middleware/check-auth');

router.get('/times/:time_id', checkAuth,controller.getReserveByTime);
router.get('/ports/:port_id', checkAuth,controller.getReserveByPort);
router.post('/', checkAuth,controller.createReserve);
router.delete('/', checkAuth,controller.cancelReserve);

module.exports = router;