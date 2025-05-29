import express from 'express'
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.post('/emp/saveEmployee', employeeController.saveEmployee);
router.put('/emp/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/emp/deleteEmployee/:id', employeeController.deleteEmployee);
router.get('/emp/getAllEmployee', employeeController.getAllEmployee);

module.exports = router;