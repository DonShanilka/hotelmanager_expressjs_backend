import express from 'express'
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.post('/saveEmployee', employeeController.saveEmployee);
router.put('/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);
router.get('/getAllEmployee', employeeController.getAllEmployee);

module.exports = router;