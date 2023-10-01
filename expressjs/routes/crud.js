const express=require("express");
const router=express.Router();
const {create,createPromise, GetPromise,DeletePromise}=require("../repository/db");


// Crud operations ------->
router.post("/",(req,res)=>{
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

router.post("/pcrud",(req,res)=>{
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

router.get("/",(req,res)=>{
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

router.put("/:id",(req,res)=>{
    // Firstly read the data form file
    //convert it to object
    // filter out all the data except that id 
    // put the new data coming from req.body into araay
    // use fs.writefile to write the data again in the file
    res.json({
        message:"Put operation called"
    })
    
})

router.delete("/:id",(req,res)=>{
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

module.exports=router;