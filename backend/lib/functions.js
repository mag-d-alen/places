const dotenv = require("dotenv");
dotenv.config({ path: "backend/.env" });
const axios = require("axios").default;

const { API_KEY, WEATHER_API_KEY } = process.env;
const placesUri = `https://api.opentripmap.com/0.1/en/places/`;
const mapUri = `https://api.opentripmap.com/0.1/en/tiles/pois/10/10/10.pbf?&apikey=${API_KEY}`;
const weatherUri = "https://api.ambeedata.com/weather/latest/by-lat-lng?";

const fetchPlace = async (placeName) => {
  try {
    const placeData = await axios.get(
      `${placesUri}geoname?name=${placeName}&apikey=${API_KEY}`
    );
    return placeData.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAttractions = async ({
  limit,
  lon_min,
  lon_max,
  lat_min,
  lat_max,
  filter,
}) => {
  try {
    const attractions = await axios.get(
      `${placesUri}bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&limit=${limit}&kinds=${filter}&apikey=${API_KEY}`,
      { accept: "application/json" }
    );
    return attractions.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchDetails = async (id) => {
  try {
    const details = await axios.get(`${placesUri}xid/${id}?apikey=${API_KEY}`, {
      accept: "application/json",
    });
    return details.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMap = async () => {
  try {
    const map = await axios.get(mapUri);
    return map.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchWeather = async ({ lat, lon }) => {
  try {
    const weather = await axios.get(
      `${weatherUri}lat=${lat}&lng=${lon}&units=si`,
      {
        headers: {
          "x-api-key": WEATHER_API_KEY,
          "Content-type": "application/json",
        },
      }
    );
    return weather.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchMap,
  fetchPlace,
  fetchWeather,
  fetchAttractions,
  fetchDetails,
};
