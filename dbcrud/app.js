const express=require("express");
const app=express();
const mongorouter=require("./routes/mongodbcrud");
app.use(express.json());

app.use("/mongodbcrud",mongorouter);


module.exports=app;