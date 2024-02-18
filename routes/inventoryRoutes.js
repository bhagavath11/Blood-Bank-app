const express = require(`express`);
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController,getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');

const router = express.Router();

// Routes
// Add inventory || POST
router.post('/create-inventory', authMiddleware, createInventoryController);

// get all records
router.get('/get-inventory', authMiddleware, getInventoryController)

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleware,
    getInventoryHospitalController
  );

  //GET RECENT BLOOD RECORDS
router.get(
    "/get-recent-inventory",
    authMiddleware,
    getRecentInventoryController
  );
  
//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);


//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleware,
    getInventoryHospitalController
  );

//GET orgnaisation RECORDS
router.get(
    "/get-orgnaisation-for-hospital",
    authMiddleware,
    getOrgnaisationForHospitalController
  );

module.exports = router;
