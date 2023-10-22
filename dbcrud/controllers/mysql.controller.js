const {CreateUser} = require("../db/mysql/mysql");


const MysqlController={
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

    GetPaginated:(req,res)=>{
        const pageSize=req.query["pageSize"];
        const offset=req.query["page"];
        const search=req.query["search"];
        const sort=req.query["sort"];
        //console.log(sort);

        Repository.FindAllPagination(pageSize,(offset-1),search,sort).then(result=>{
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
        CreateUser(body).then(data=>{
            res.json({
                data:data
            })
        }).catch(err=>{
            res.json({
                error:err
            })
        })
        
       

    
    },

    PostMany:(req,res)=>{
        const body=req.body;
        Repository.InsertMany(body).then(result=>{
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
        const body=req.body;
        const id=req.params.id;
        Repository.UpdateOne(body,id).then(result=>{
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

    PutMany:(req,res)=>{
        const body=req.body;
        Repository.UpdateMany(body.name,body).then(result=>{
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
    Delete:(req,res)=>{
        const id=req.params.id;
        Repository.DeleteOne(id).then(result=>{
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

    
}


module.exports=MysqlController;