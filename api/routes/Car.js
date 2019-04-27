const express = require('express');
const router = express.Router();
const controller = require('../controller/CarController');
const checkAuth = require('../middleware/check-auth');

router.get('/ports/:port_id',controller.getCarsByPortId);
router.post('/',checkAuth,controller.createCarByPortId);
router.delete('/',checkAuth,controller.deleteCar);
router.put('/',checkAuth,controller.updateCar);


module.exports = router;