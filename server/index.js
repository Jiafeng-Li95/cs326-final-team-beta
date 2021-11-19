const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const vendorRouter = require("./routes/vendorRouter");
const pageViewRouter = require("./routes/pageViewRouter");

//need to place before the routers
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//specify the route
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/vendor", vendorRouter);
app.use("/pageview", pageViewRouter);

//server front-end as static page
app.use("/", express.static("public"));

app.listen(process.env.PORT || 3000);
