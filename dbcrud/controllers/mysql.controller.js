const {CreateUser, readUser, readAllUser, updateUser, deleteUser, upsertUser} = require("../db/mysql/mysql");


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

        readAllUser(pageSize,(offset-1),search,sort).then(result=>{
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
        const id=req.params.id;
        console.log(id);
       readUser(id).then(data=>{
        res.json({
            data:data
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
        updateUser(body,id).then(result=>{
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

    Upsert:(req,res)=>{
        const body=req.body;
        const id=req.params.id;
        upsertUser(body,id).then(result=>{
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
        deleteUser(id).then(result=>{
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