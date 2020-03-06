const express = require("express");
const locationsFile = __dirname + "/../../models/instock-locations.json";
const locations = require(locationsFile);
const helper = require("../../helpers/helper");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send(locations);
  })
  .get("/:id", (req, res) => {
    const requestLocation = locations.some(
      location => location.id === req.params.id
    );
    if (requestLocation) {
      res.json(locations.filter(location => location.id === req.params.id));
    } else {
      res.statusMessage(400).jsonn({
        errorMessege: `Can't find any location with the ID: ${req.params.id}`
      });
    }
  });
module.exports = router;
