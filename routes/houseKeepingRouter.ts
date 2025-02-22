import express from 'express'
const router = express.Router();
const houseKeepingController = require('../controllers/HouseKeepingController');

router.post('/hk/saveHouseKeeping', houseKeepingController.saveHouseKeeping);
router.put('/hk/updateHouseKeeping/:id', houseKeepingController.updateHouseKeeping);
router.delete('/hk/deleteHouseKeeping/:id', houseKeepingController.deleteHouseKeeping);
router.get('/hk/getAllHouseKeeping', houseKeepingController.getAllHouseKeeping);

module.exports = router;