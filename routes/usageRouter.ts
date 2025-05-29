import express from 'express'
const router = express.Router();
const usageController = require('../controllers/UsageController');

router.post('/sU/saveUsage', usageController.saveUsage);
router.put('/sU/updateUsage/:id', usageController.updateUsage);
router.delete('/sU/deleteUsage/:id', usageController.deleteUsage);
router.get('/sU/getAllUsage', usageController.getAllUsage);

module.exports = router;