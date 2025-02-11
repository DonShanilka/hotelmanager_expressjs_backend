import express from 'express';

const router = express.Router();
const roomController = require('../controllers');

router.post('/saveRoom', roomController.saveRoom); 
router.put('/updateRoom/:id', roomController.updateRoom);
router.delete('/deleteRoom/:id', roomController.deletRoom);
router.get('/getAllRoom', roomController.getAllRooms);

module.exports = router;