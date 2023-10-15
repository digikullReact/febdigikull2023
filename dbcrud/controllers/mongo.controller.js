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
    Post:(req,res)=>{
    
    },
    Put:(req,res)=>{
    
    },
    Delete:(req,res)=>{
    
    },

    
}


module.exports=Controller;