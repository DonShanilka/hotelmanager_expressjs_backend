import express from 'express';
import multer from 'multer';

const router = express.Router();
const roomController = require('../controllers/RoomController');
const storage = roomController.storage;
const upload = multer({ storage });

router.post('/saveRoom', roomController.saveRoom); 
// router.post("/saveRoom", upload.single("selectedImage"), roomController.saveRoom);

module.exports = router;