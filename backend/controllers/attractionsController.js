const { fetchAttractions, fetchDetails } = require("../lib/functions.js");

const getAttractionsController = async (req, res) => {
  const { lon_min, lon_max, lat_min, lat_max } = req.query;
  const limit = req.query.limit;
  const filter = req.query.filter;
  try {
    const attractionsInfo = await fetchAttractions({
      limit,
      lon_min,
      lon_max,
      lat_min,
      lat_max,
      filter,
    });
    return res.send(attractionsInfo);
  } catch (err) {
    return res.json(err);
  }
};

const getDetailsController = async (req, res) => {
  const id = req.query.data;
  try {
    const details = await fetchDetails(id);
    return res.send(details);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  getAttractionsController,
  getDetailsController,
};
