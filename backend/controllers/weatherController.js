const { fetchWeather } = require("../lib/functions.js");
const weatherController = async (req, res) => {
  const { lat, lon } = req.params;
  try {
    const weather = await fetchWeather({ lat, lon });
    return res.send(weather.data);
  } catch (err) {
    return res.json(err);
  }
};
module.exports = weatherController;
