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

// const { API_KEY, WEATHER_API_KEY } = process.env;
// const placesUri = `https://api.opentripmap.com/0.1/en/places/`;
// const mapUri = `https://api.opentripmap.com/0.1/en/tiles/pois/10/10/10.pbf?&apikey=${API_KEY}`;

// const weatherUri = "https://api.ambeedata.com/weather/latest/by-lat-lng?";
// const fetchPlace = async (placeName) => {
//   try {
//     const placeData = await axios.get(
//       `${placesUri}geoname?name=${placeName}&apikey=${API_KEY}`
//     );
//     return placeData.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchAttractions = async ({
//   limit,
//   lon_min,
//   lon_max,
//   lat_min,
//   lat_max,
// }) => {
//   try {
//     const attractions = await axios.get(
//       `${placesUri}bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&limit=${limit}&kinds=interesting_places&apikey=${API_KEY}`,
//       { accept: "application/json" }
//     );
//     return attractions.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchDetails = async (id) => {
//   try {
//     const details = await axios.get(`${placesUri}xid/${id}?apikey=${API_KEY}`, {
//       accept: "application/json",
//     });
//     return details.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchMap = async () => {
//   try {
//     const map = await axios.get(mapUri);
//     return map.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchWeather = async ({ lat, lon }) => {
//   try {
//     const weather = await axios.get(
//       `${weatherUri}lat=${lat}&lng=${lon}&units=si`,
//       {
//         headers: {
//           "x-api-key": WEATHER_API_KEY,
//           "Content-type": "application/json",
//         },
//       }
//     );
//     return weather.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// router.get("/place/:name", async (req, res) => {
//   const placeName = req.params.name;
//   try {
//     const placeData = await fetchPlace(placeName);
//     res.send(placeData);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.get("/details/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const details = await fetchDetails(id);
//     res.send(details);
//   } catch (err) {
//     res.json(err);
//   }
// });
// router.get("/map", async (req, res) => {
//   try {
//     const details = await fetchMap();
//     res.send(map);
//   } catch (err) {
//     console.log(err.data);
//   }
// });

// router.get("/weather/:lat&:lon", async (req, res) => {
//   const { lat, lon } = req.params;
//   try {
//     const weather = await fetchWeather({ lat, lon });
//     res.send(weather.data);
//   } catch (err) {
//     res.json(err);
//   }
// });

// https: module.exports = router;
