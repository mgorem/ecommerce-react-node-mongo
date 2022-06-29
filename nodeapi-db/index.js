const express = require("express"); //import express
const app = express(); // use express to make an express server
const mongoose = require("mongoose"); // import mongoose
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");

// to use dotenv file
dotenv.config();

// use mongoose to connect to mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
// get data as json using express function
app.use(express.json());

// import routes from  routes folder and use '/api/route', routeFileName
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

// listen for any changes on this port
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is Running!");
});
