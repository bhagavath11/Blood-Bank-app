const express = require("express");
const { testController } = require("../controllers/testController");

//router objet

const router =express.Router();

// routers
router.get("/", testController);

//export
module.exports = router;