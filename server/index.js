const express = require("express");
const path = require("path");
const app = express();
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const vendorRouter = require("./routes/vendorRouter");

//specify the route
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/vendor", vendorRouter);

app.use(express.json());

//server front-end as static page
app.use("/", express.static("public"));

//welcome page
app.get("/", function (req, res) {
  res.redirect("/login/login.html");
});

app.listen(3000);
