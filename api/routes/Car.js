const express = require('express');
const router = express.Router();
const controller = require('../controller/CarController');
const checkAuth = require('../middleware/check-auth');

router.get('/ports/:port_id',controller.getCarsByPortId);
router.post('/',controller.createCarByPortId);
router.delete('/',controller.deleteCar);
router.put('/',controller.updateCar);


module.exports = router;