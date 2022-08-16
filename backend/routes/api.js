const router = require("express").Router();
const basicInfoController = require("../controllers/basicInfoController.js");
const {
  getDetailsController,
  getAttractionsController,
} = require("../controllers/attractionsController.js");
const weatherController = require("../controllers/weatherController.js");
const mapController = require("../controllers/mapController.js");
router.get("/place", basicInfoController);
router.get("/attractions", getAttractionsController);
router.get("/weather", weatherController);
router.get("/details", getDetailsController);
router.get("/map", mapController);

module.exports = router;
