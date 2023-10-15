const Repository = require("../db/mongodb/repository");


const Controller={
    Get:(req,res)=>{
        Repository.FindAll().then(result=>{
            res.json({
                data:result
            })
        }).catch(err=>{
            res.json({
                error:err
            })
        })
    
    },

    GetOne:(req,res)=>{
        Repository.FindOne(req.params.id).then(result=>{
            res.json({
                data:result
            })
        }).catch(err=>{
            res.json({
                error:err
            })
        })
    
    },
    Post:(req,res)=>{
        const body=req.body;
        Repository.InsertOne(body).then(result=>{
            res.json({
                message:"Success",
                result
            })
        }).catch(err=>{
            res.json({
                error:err
            })
        })

    
    },
    Put:(req,res)=>{
    
    },
    Delete:(req,res)=>{
    
    },

    
}


module.exports=Controller;