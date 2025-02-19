import express from 'express';

const router = express.Router();
const accusationController = require('../controllers/AccusationController');

router.post('/acc/saveAccusation', accusationController.saveAccusation);
router.put('acc//updateAccusation/:id', accusationController.updateAccusation);
router.delete('/acc/deleteAccusation/:id', accusationController.deleteAccusation);
router.get('/acc/getAllAccusation', accusationController.getAllAccusation);

module.exports = router;