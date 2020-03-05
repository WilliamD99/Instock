const express = require("express");

const locationsFile = __dirname + "/../../models/instock-locations.json";

const locations = require(locationsFile);

const helper = require("../../helpers/helper");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(locations);
});
// .get("/:id", (req, res) => {
//   const requestVideo = videos.some(video => video.id === req.params.id);
//   if (requestVideo) {
//     res.json(videos.filter(video => video.id === req.params.id));
//   } else {
//     res.status(400).json({
//       errorMessage: `Can not find any video with the Id: ${req.params.id}`
//     });
//   }
// })

module.exports = router;
