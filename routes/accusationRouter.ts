import express from 'express';

const router = express.Router();
const accusationController = require('../controllers/AccusationController');

router.post('/saveAccusation', accusationController.saveAccusation);
router.put('/updateAccusation/:id', accusationController.updateAccusation);
router.delete('/deleteAccusation/:id', accusationController.deleteAccusation);
router.get('/getAllAccusation', accusationController.getAllAccusation);

module.exports = router;