const express = require('express');
const router = express.Router();
const controller = require('../controller/ReserveController');
const checkAuth = require('../middleware/check-auth');

router.get('/times', checkAuth,controller.getReserveByTime);
router.post('/', checkAuth,controller.createReserve);
router.delete('/', checkAuth,controller.cancelReserve);

module.exports = router;