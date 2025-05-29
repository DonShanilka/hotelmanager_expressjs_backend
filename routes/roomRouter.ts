import express from 'express';

const router = express.Router();
const roomController = require('../controllers/RoomController');

router.post('/room/saveRoom', roomController.saveRoom);
router.put('/room/updateRoom/:id', roomController.updateRoom);
router.delete('/room/deleteRoom/:id', roomController.deletRoom);
router.get('/room/getAllRoom', roomController.getAllRooms);

module.exports = router;