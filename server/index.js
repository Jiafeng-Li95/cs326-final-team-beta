const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

//server front-end as static page
app.use("/", express.static("public"));

app.get("/", function (req, res) {
  res.redirect("/login/login.html");
});
app.listen(3000);
