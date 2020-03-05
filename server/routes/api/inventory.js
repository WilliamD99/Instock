const express = require("express");
const inventoryFile = __dirname + "/../../models/instock-inventory.json";
const inventory = require(inventoryFile);
const helper = require("../../helpers/helper");
const inventoryRouter = express.Router();
// Nested router
const itemRouter = express.Router({ mergeParams: true });

inventoryRouter.use("/:id/items", itemRouter);

inventoryRouter
  .get("/", (req, res) => {
    res.send(inventory);
  })
  .get("/:id", (req, res) => {
    const requestInventory = inventory.some(item => item.id === req.params.id);
    if (requestInventory) {
      res.json(inventory.filter(item => item.id === req.params.id));
    } else {
      res.status(400).json({
        errorMessege: `Can't find any location with the ID: ${req.params.id}`
      });
    }
  });
// Get all items of one specific locations
itemRouter.get("/", (req, res) => {
  let requestInventory = inventory.filter(item => item.id === req.params.id);
  let items = requestInventory[0].items;
  res.json(items);
});
// Get a single item of that location
itemRouter
  .get("/:ref", (req, res) => {
    let requestInventory = inventory.filter(item => item.id === req.params.id);
    let items = requestInventory[0].items;
    if (items) {
      for (let index = 0; index < items.length; i++) {
        if (items[index].ref === req.params.ref) {
          res.send(items[index]);
        } else {
          res.status(400).json({
            errorMessege: `Could not find the item with ref: ${req.params.ref}`
          });
        }
      }
    } else {
      res.state(400).send("Somethings went wrong, please try again");
    }
  })
  .delete("/:ref", (req, res) => {
    let requestInventory = inventory.filter(item => item.id === req.params.id);
    let items = requestInventory[0].items;
    if (items) {
    }
  });

//   .delete("/:id", (req, res) => {
//     const deleteVideo = videos.some(video => video.id === req.params.id);
//     if (deleteVideo) {
//       const videosAfter = videos.filter(video => video.id !== req.params.id);
//       helper.writeJSONFile(videosFile, videosAfter);
//       res.send(`Delete video with the Id of ${req.params.id}`);
//     }
//   });
module.exports = inventoryRouter;
