const router = require("express").Router();
const basicInfoController = require("../controllers/basicInfoController.js");
const {
  getDetailsController,
  getAttractionsController,
} = require("../controllers/attractionsController.js");
const weatherController = require("../controllers/weatherController.js");
const mapController = require("../controllers/mapController.js");
router.get("/place/:name", basicInfoController);
router.get(
  "/attractions/:limit&:lon_min&:lon_max&:lat_min&:lat_max",
  getAttractionsController
);
router.get("/weather/:lat&:lon", weatherController);
router.get("/details/:id", getDetailsController);
router.get("/map", mapController);

module.exports = router;
