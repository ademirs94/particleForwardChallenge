import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";

import car from "./car.js";

const PORT = process.env.PORT || 3000;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(path.dirname(""), "client/build")));

// Handle GET requests to /car route
app.get("/car", (req, res) => {
  res.json(car);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.dirname(""), "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
