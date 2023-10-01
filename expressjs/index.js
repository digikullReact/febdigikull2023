const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const { v4: uuidv4 } = require('uuid');
const {m1,m2, ApplevelMiddleware}=require("./middlewares/middlewares");
const { PasswordEncryptionController } = require("./controllers/controller");
const CrudRouter=require("./routes/crud");
const DefaultRouter=require("./routes/default")
const middleWareRouter=require("./routes/middlewareroute");
app.use(express.json());  // middleware to parse the data coming from user in req body

app.use(ApplevelMiddleware)
// Default Router
app.use("/",DefaultRouter);

// crud routes

app.use("/crud",CrudRouter);



// Middleware route

app.use("/middleware",middleWareRouter)

// it should be at the bottom most level
app.get("*",(req,res)=>{
    res.send("404 Not found");
})


app.listen(8090,()=>{
    console.log("Server Running on port 8090")
})