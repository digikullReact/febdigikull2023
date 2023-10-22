const express=require("express");
const app=express();
const mongorouter=require("./routes/mongodbcrud");
const mysqlrouter=require("./routes/mysqlcrud");

app.use(express.json());

app.use("/mongodbcrud",mongorouter);
app.use("/mysql",mysqlrouter);



module.exports=app;