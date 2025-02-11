import express from 'express'
const router = express.Router();
const houseKeepingController = require('../controllers/HouseKeepingController');

router.post('/saveHouse', houseKeepingController.saveHouseKeeping);
router.put('/updateHouse/:id', houseKeepingController.updateHouseKeeping);
router.delete('/deleteHouse/:id', houseKeepingController.deleteHouseKeeping);
router.get('/getAllHouse', houseKeepingController.getAllHouseKeeping);

module.exports = router;