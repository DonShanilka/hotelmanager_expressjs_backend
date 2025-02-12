import express from 'express'
const router = express.Router();
const usageController = require('../controllers/UsageController');

router.post('/saveUsage', usageController.saveUsage);
router.put('/updateUsage/:id', usageController.updateUsage);
router.delete('/deleteUsage/:id', usageController.deleteUsage);
router.get('/getAllUsage', usageController.getAllUsage);

module.exports = router;