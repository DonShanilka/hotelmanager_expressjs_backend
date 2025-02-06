import express from 'express'
const router = express.Router();
const guestController = require('../controllers/GuestController');

router.post('/saveGuest', guestController.save);
router.put('/updateGuest/:id', guestController.update);
router.delete('/deleteGuest/:id', guestController.delete);
router.get('/getAllGuest', guestController.getAll);

module.exports = router;