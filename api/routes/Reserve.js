const express = require('express');
const router = express.Router();
const controller = require('../controller/ReserveController');
const checkAuth = require('../middleware/check-auth');
const checkAuthAdmin = require('../middleware/check-auth-admin');


router.get('/users',checkAuth,controller.getReserveByUserId);
router.post('/comment',checkAuth,controller.commentReserve);
router.get('/times/:time_id',controller.getReserveByTime);
router.get('/ports/:port_id',controller.getReserveByPort);
router.post('/', checkAuth,controller.createReserve);
router.delete('/', checkAuth,controller.cancelReserve);
router.put('/isCame', checkAuthAdmin,controller.updateIsCame);

module.exports = router;