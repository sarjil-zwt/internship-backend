const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
app.use(cors());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

const user = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoute");
const cartRoutes = require("./routes/cartRoute");
const shippingTypeRoutes = require("./routes/shippingTypeRoute");
const reviewRoutes = require("./routes/reviewRoute");
const addressRoutes = require("./routes/addressRoute");
const paymentRoutes = require("./routes/paymentRoute");
const orderRoutes = require("./routes/orderRoutes");
const groupRoutes = require("./routes/groupRoute");
const subcategoryRoutes = require("./routes/subcategoryRoute");
const searchRoutes = require("./routes/searchRoute");

app.use("/user", user);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/cart", cartRoutes);
app.use("/shippingtypes", shippingTypeRoutes);
app.use("/reviews", reviewRoutes);
app.use("/addresses", addressRoutes);
app.use("/payments", paymentRoutes);
app.use("/orders", orderRoutes);
app.use("/groups", groupRoutes);
app.use("/subcategories", subcategoryRoutes);
app.use("/search", searchRoutes);

app.use(errorMiddleware);

module.exports = app;
