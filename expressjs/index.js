const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
app.get("/",(req,res)=>{
    // You can send text response
    res.send("hello world");

})
app.get("/html",(req,res)=>{

    fs.readFile("home.html","utf-8",(err,data)=>{
        if(err){
            res.send("Error");
            return
        }
        res.send(data);
    })

})

app.get("/htmlpage",(req,res)=>{
console.log(__dirname);
  res.sendFile(path.join(__dirname,"home.html"));

})

// build a simple website with 
// about page
// home page
// contact us page

app.listen(8090,()=>{
    console.log("Server Running on port 8090")
})