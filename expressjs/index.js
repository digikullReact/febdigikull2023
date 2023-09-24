const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const {create,createPromise, GetPromise,DeletePromise}=require("./repository/db");
const { v4: uuidv4 } = require('uuid');

app.use(express.json());  // middleware to parse the data coming from user in req body
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
app.get("/contact",(req,res)=>{
    console.log(__dirname);
      res.sendFile(path.join(__dirname,"contact.html"));
    
    })
    app.get("/about",(req,res)=>{
        console.log(__dirname);
          res.sendFile(path.join(__dirname,"about.html"));
        
        })

// build a simple website with 
// about page
// home page
// contact us page


// For sending the json response

app.get("/json",(req,res)=>{
    res.json({
        name:"Shubham"
    })
})

// How to get the request parameters



// Path params
app.get("/jsondata/:id/:data",(req,res)=>{
    const idRequest=req.params["id"];
    const dataRequest=req.params["data"];

    res.json({
        params:idRequest,
        dataRequest
    })
})

//Query Parameters
app.get("/jsonurl",(req,res)=>{
    const name=req.query["name"];
    const city=req.query["city"];


    res.json({
        params:name,
        city
    })
})

// The question for you is 
//Write a route that accepts query parameters
// And as per the query params it sends the htmlpage
// if page query param = home --->render home page and so on

app.get("/url",(req,res)=>{
    const page=req.query["page"];
   // res.sendFile(path.join(__dirname,`${page}.html`));

   res.redirect(`/${page}`);

    


    



})



// Crud operations ------->
app.post("/crud",(req,res)=>{
    const data =req.body;
    console.log("Data post body",data);
    data.id=uuidv4(); 
    create(data,(err,data)=>{
        if (err){
            res.json({
                message:"failed",
                error:err
            })

            return
        }

        res.json({
            message:"success",
        })

    })  // asynchrnous function
    

})

app.post("/pcrud",(req,res)=>{
    const data =req.body;
    console.log("Data post body",data);
   createPromise(data).then(result=>{
    res.json({
        message:"success",
    })
   }).catch(err=>{
    res.json({
        message:"failed",
        error:err
    })

   })
    

})

app.get("/crud",(req,res)=>{
    GetPromise().then(data=>{
        res.json({
            data
        })
    }).catch(err=>{
        res.json({
            err:err
        })
    })
    
})

app.put("/crud",(req,res)=>{
    res.json({
        message:"Put operation called"
    })
    
})

app.delete("/crud/:id",(req,res)=>{
    DeletePromise(req.params.id).then(result=>{
        res.json({
            message:"Deleted Success fully"
        })
    }).catch(err=>{
        res.json({
            err:err
        })
    })
    
})
// it should be at the bottom most level
app.get("*",(req,res)=>{
    res.send("404 Not found");
})


app.listen(8090,()=>{
    console.log("Server Running on port 8090")
})