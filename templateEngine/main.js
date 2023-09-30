const express=require("express");
const app=express();
const {engine}=require("express-handlebars");
const fs=require("fs");
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');  // thes says our templates will reside in the views directory

app.get("/",(req,res)=>{

    // Firstly read the file 
    fs.readFile("data.txt","utf-8",(err,data)=>{
        if(err){
            res.send("Error in reading data");
            return;
        }
        res.render("home",{data:data})
    })
    
    

    
})

app.get("/list",(req,res)=>{
    // Data in array 
    const data=[
        "apple",
        "Banana",
        "Peach",
        "Orange",
        "Guva",
        "Kiwi"
    ]
    res.render("list",{result:data})

})
app.listen(5050,()=>{
    console.log("Server Running at port ",5050)
})