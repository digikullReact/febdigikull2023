const PasswordEncryptionController=(req,res)=>{

    // this is our controller 
    // Which has all the business logic
    res.json({
        message:"Middlware Route called",
        encryptedPassword:req.body.password
    })
}


module.exports={
    PasswordEncryptionController
}