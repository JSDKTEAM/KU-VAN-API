const express = require('express');
const router = express.Router();
const controller = require('../controller/TimeController');
const checkAuthAdmin = require('../middleware/check-auth-admin');

router.delete('/',checkAuthAdmin, controller.deleteTime);
router.delete('/date/:date',checkAuthAdmin, controller.deleteTimeByDate);
router.post('/',checkAuthAdmin, controller.createTime);
router.get('/',checkAuthAdmin,controller.getAllTimes);
router.get('/ports/:port_id',controller.getTimeByPortId);
router.get('/ports/:port_id/date/:date', checkAuthAdmin,controller.getTimeByPortIdAndByDate);

module.exports = router;