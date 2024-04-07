"use strict";

const express = require("express");

const PORT = 8000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send(
    "Nama : Enrico <br> Nim : 52021005 <br> urusan : Teknik informatika"
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
