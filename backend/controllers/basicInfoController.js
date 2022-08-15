const { fetchPlace } = require("../lib/functions.js");

const basicInfoController = async (req, res) => {
  
  const placeName = req.params.name;
  try {
    const placeData = await fetchPlace(placeName);
    return res.send(placeData);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = basicInfoController;
