const express = require('express');
const busController =  require('../controllers/busController');
const verifyAuth = require('../middlewares/verifyAuth');

const { addBusDetails, getAllBuses } = busController;

const router = express.Router();

// buses Routes

router.post('/buses', verifyAuth, addBusDetails);
router.get('/buses', verifyAuth, getAllBuses);

module.exports = router;
