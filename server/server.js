const express = require("express");
// init the express app in order to use express methods
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const locationRoutes = require("./routes/api/locations");
const inventoryRoutes = require("./routes/api/inventory");

app.use("/locations", locationRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
