import express from 'express'
const router = express.Router();
const serviceController = require('../controllers/ServiceController');

router.post('/service/saveService', serviceController.saveService);
router.put('/service/updateService/:id', serviceController.updateService);
router.delete('/service/deleteService/:id', serviceController.deleteService);
router.get('/service/getAllService', serviceController.getAllService);

export default router;