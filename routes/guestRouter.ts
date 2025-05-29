import express from 'express'
const router = express.Router();
const guestController = require('../controllers/GuestController');

router.post('/gu/saveGuest', guestController.save);
router.put('/gu/updateGuest/:id', guestController.update);
router.delete('/gu/deleteGuest/:id', guestController.delete);
router.get('/gu/getAllGuest', guestController.getAll);

module.exports = router;