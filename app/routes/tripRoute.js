const express = require('express');

const tripController = require('../controllers/tripController');
const { createTrip, getAllTrips, cancelTrip, filterTripByOrigin, filterTripByDestination, getDetailTrip } = tripController;
const verifyAuth = require('../middlewares/verifyAuth');

const router = express.Router();

// trips Routes

router.post('/trips', verifyAuth, createTrip);
router.get('/trips', verifyAuth, getAllTrips);
router.get('/trips/:tripId', verifyAuth, getDetailTrip);
router.patch('/trips/:tripId', verifyAuth, cancelTrip);
router.get('/trips/origin', verifyAuth, filterTripByOrigin);
router.get('/trips/destination', verifyAuth, filterTripByDestination);

module.exports = router;
