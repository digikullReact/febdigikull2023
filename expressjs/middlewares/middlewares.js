const bcrypt = require('bcrypt');
const saltRounds = 10;

const m1=(req,res,next)=>{
    console.log("Middleware called");

    next();


}
const m2=(req,res,next)=>{
    console.log("Middleware 2 called");
    res.send("From middleware 2")

    //next();


}

const PasswordEncryption=(req,res,next)=>{
    // Middleware for password encryption

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
       req.body.password=hash;
       next();
    })

}

const ApplevelMiddleware=(req,res,next)=>{
    console.log("App level middleware called");
    next();
}

const RouteslevelMiddleware=(req,res,next)=>{
    console.log("Routes level middleware called");
    next();
}

module.exports={
    m1,
    m2,
    PasswordEncryption,
    ApplevelMiddleware,
    RouteslevelMiddleware
}