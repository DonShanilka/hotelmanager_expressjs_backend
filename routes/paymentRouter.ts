import express from 'express';

const router = express.Router();
const paymentController = require('../controllers/PaymentController');

router.post('/payment/savePayment', paymentController.savePayment);
router.put('/payment/updatePayment/:id', paymentController.updatePayment);
router.delete('/payment/deletePayment/:id', paymentController.deletePayment);
router.get('/payment/getAllPayment', paymentController.getAllPayment);

export default router;