"use strict";

const express = require("express");

const PORT = 8000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send("Enricox\n");
  res.send("52021005\n");
  res.send("Informatika\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
