import express from 'express'
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.post('/epm/saveEmployee', employeeController.saveEmployee);
router.put('/epm/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/epm/deleteEmployee/:id', employeeController.deleteEmployee);
router.get('/epm/getAllEmployee', employeeController.getAllEmployee);

module.exports = router;