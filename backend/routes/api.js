
const express = require("express");
const axios = require("axios").default;
const router = require("express").Router();

const API_KEY = "5ae2e3f221c38a28845f05b6a157983b16f70d1abecfe988e6d2cfe0"
const placesUri = `https://api.opentripmap.com/0.1/en/places/`;


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

const fetchAttractions = async ({ lon_min, lon_max, lat_min, lat_max }) => {
  try {
    const attractions = await axios.get(
      `${placesUri}bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&kinds=interesting_places&apikey=${API_KEY}`,
      {
        accept: "application/json",
      }
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

router.get(
  "/attractions/:lon_min&:lon_max&:lat_min&:lat_max",

  async (req, res) => {
    const { lon_min, lon_max, lat_min, lat_max } = req.params;
    try {
      const attractionsInfo = await fetchAttractions({
        lon_min,
        lon_max,
        lat_min,
        lat_max,
      });
      res.send(attractionsInfo);
    } catch (err) {
      res.json(err);
    }
  }
);
router.get("/place/:name", async (req, res) => {
  const placeName = req.params.name;
  try {
    const placeData = await fetchPlace(placeName);
    res.send(placeData);
  } catch (err) {
    res.json(err);
  }
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const details = await fetchDetails(id);
    res.send(details);
  } catch (err) {
    res.json(err);
  }
});

https: module.exports = router;
