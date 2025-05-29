import express from 'express'
const router = express.Router();
const bookingController = require('../controllers/BookingController');

router.post('/bo/saveBooking', bookingController.saveBooking);
router.put('/bo/updateBooking/:id', bookingController.updateBooking);
router.delete('/bo/deleteBooking/:id', bookingController.deleteBooking);
router.get('/bo/getAllBooking', bookingController.getAllBooking);

module.exports = router;