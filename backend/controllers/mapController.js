const { fetchMap } = require("../lib/functions.js");
const mapController = async (req, res) => {
  try {
    const map = await fetchMap();
    return res.send(map);
  } catch (err) {
    return console.log(err.data);
  }
};
module.exports = mapController;
