const app = require("./app.js")

const connectdb=require("../backend/config/database.js")
const cloudinary = require("cloudinary");
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down server due to uncaughtError");
    process.exit(1);
})


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/secret.env" });
  }
connectdb();
cloudinary.config({
    cloud_name:"dsd8hp9wx",
    api_key:241217624559331,
    api_secret:"0dlZUeXVVZkU45-quw4wLmG2ixc",
})

const server = app.listen(process.env.PORT,()=>{
    console.log("Server is working on",process.env.PORT);
})

//unhandled rejections
process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message} `);
    console.log("Shutting down server due to unhandled error");
    server.close(()=>{
        process.exit();
    });
    
})