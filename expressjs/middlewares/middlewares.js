const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');

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

const ErrorMiddleware=(err, req, res, next) => {
   // console.error(err.stack)
    res.status(500).json({
      error:  err.toString()
    });
  }

  const JWTMiddleware=(req,res,next)=>{
    // Check for the token 
    const token=req.headers["authorization"];
   // console.log(req.headers)

    if(!token){
        res.status(401).
        json({
            message:"Please provide valid token"
        })

        return
    }else{

        // Check for valid token as well 
        try {
            var decoded = jwt.verify(token, 'shhhhh');
            console.log(decoded);
            next();
          } catch(err) {
            console.log(err);
            // err
            next("Invalid token")
          }        

        //next();
    }

  }

module.exports={
    m1,
    m2,
    PasswordEncryption,
    ApplevelMiddleware,
    RouteslevelMiddleware,
    ErrorMiddleware,
    JWTMiddleware
}