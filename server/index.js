const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const vendorRouter = require("./routes/vendorRouter");

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

//server front-end as static page
app.use("/", express.static(path.dirname + "public"));

app.listen(process.env.PORT || 3000);
