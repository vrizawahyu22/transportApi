const express = require('express');

const bookingController = require('../controllers/bookingController');
const {
  createBooking, getAllBookings, deleteBooking, updateBookingSeat, getDetailBooking
} = bookingController;
const verifyAuth = require('../middlewares/verifyAuth');

const router = express.Router();

// bookings Routes

router.post('/bookings', verifyAuth, createBooking);
router.get('/bookings', verifyAuth, getAllBookings);
router.get('/bookings/:bookingId', verifyAuth, getDetailBooking);
router.delete('/bookings/:bookingId', verifyAuth, deleteBooking);
router.put('/bookings/:bookingId', verifyAuth, updateBookingSeat);

module.exports = router;
