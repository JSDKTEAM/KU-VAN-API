const express = require('express');
const router = express.Router();
const controller = require('../controller/CarController');
const checkAuth = require('../middleware/check-auth');
const checkAuthAdmin = require('../middleware/check-auth-admin');

router.get('/ports/:port_id',controller.getCarsByPortId);
router.post('/',checkAuthAdmin,controller.createCarByPortId);
router.delete('/',checkAuthAdmin,controller.deleteCar);
router.put('/',checkAuthAdmin,controller.updateCar);


module.exports = router;