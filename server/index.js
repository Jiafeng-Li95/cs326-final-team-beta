const express = require("express");
const path = require("path");
const app = express();
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const vendorRouter = require("./routes/vendorRouter");

//need to place before the routers
app.use(express.json());

//specify the route
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/vendor", vendorRouter);

//server front-end as static page
app.use("/", express.static("public"));

app.listen(3000);
