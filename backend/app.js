const express =require ("express");
const errorMiddlewear=require("../backend/middlewares/error")
const app=express();
const cookieParser=require("cookie-parser")
const bodyParser = require('body-parser')
const fileupload=require('express-fileupload')
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/secret.env" });
  }

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());



const product = require("./routes/ProductRoutes");

app.use(product);

const user=require("./routes/userRoutes");

app.use(user);

const order=require("./routes/orderRoutes");

app.use(order);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddlewear)
module.exports = app;