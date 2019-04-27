const express = require('express');
const router = express.Router();
const controller = require('../controller/TimeController');
const checkAuth = require('../middleware/check-auth');

router.delete('/',checkAuth, controller.deleteTime);
router.post('/',checkAuth, controller.createTime);
router.get('/', controller.getAllTimes);
router.get('/ports/:port_id', controller.getTimeByPortId);

module.exports = router;