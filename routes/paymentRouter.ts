import express from 'express';

const router = express.Router();
const paymentController = require('../controllers/PaymentController');

router.post('/savePayment', paymentController.savePayment); 
router.put('/updatePayment/:id', paymentController.updatePayment);
router.delete('/deletePayment/:id', paymentController.deletePayment);
router.get('/getAllPayment', paymentController.getAllPayment);

module.exports = router;