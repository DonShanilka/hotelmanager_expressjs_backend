import express from 'express'
const router = express.Router();
const bookingController = require('../controllers/BookingController');

router.post('/saveBooking', bookingController.saveBooking);
router.put('/updateBooking/:id', bookingController.updateBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking);
router.get('/getAllBooking', bookingController.getAllBooking);

module.exports = router;