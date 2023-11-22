const { default: mongoose } = require("mongoose");



const connectdb=()=>{
    mongoose.connect(process.env.URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
.then((data)=>{
    console.log("mongo db connected with server ",data.connection.host);
})
}

module.exports=connectdb;