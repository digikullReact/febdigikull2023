const express=require("express");
const app=express();
const mongorouter=require("./routes/mongodbcrud");
const mysqlrouter=require("./routes/mysqlcrud");
const uploadRouter=require("./routes/fileUpload");
const cors=require("cors");

app.use(cors());
app.use(express.json());

app.use("/mongodbcrud",mongorouter);
app.use("/mysql",mysqlrouter);
app.use("/upload",uploadRouter)



module.exports=app;