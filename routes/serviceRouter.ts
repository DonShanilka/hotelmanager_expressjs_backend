import express from 'express'
const router = express.Router();
const serviceController = require('../controllers/ServiceController');

router.post('/saveService', serviceController.saveService);
router.put('/updateService/:id', serviceController.updateService);
router.delete('/deleteService/:id', serviceController.deleteService);
router.get('/getAllService', serviceController.getAllService);

module.exports = router;