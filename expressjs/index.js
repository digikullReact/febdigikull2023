const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const { v4: uuidv4 } = require('uuid');
const {m1,m2, ApplevelMiddleware}=require("./middlewares/middlewares");
const { PasswordEncryptionController } = require("./controllers/controller");
const CrudRouter=require("./routes/crud");
const DefaultRouter=require("./routes/default")
const middleWareRouter=require("./routes/middlewareroute");
const authRouter=require("./routes/auth");
app.use(express.json());  // middleware to parse the data coming from user in req body

app.use(ApplevelMiddleware)
// Default Router
app.use("/",DefaultRouter);

// crud routes

app.use("/crud",CrudRouter);
app.use("/auth",authRouter)



// Middleware route

app.use("/middleware",middleWareRouter)

// it should be at the bottom most level
app.get("*",(req,res)=>{
    res.send("404 Not found");
})


app.listen(8090,()=>{
    console.log("Server Running on port 8090")
})

/**
 * Create a middlware that checks for password length and checks for valid email
 * if either of them are invalide send response of 400 error to the user
 */



// Middleware to check password length
function checkPasswordLength(req, res, next) {
  const { password } = req.body;

  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  // If password length is valid, move to the next middleware
  next();
}

// Middleware to validate email
function validateEmail(req, res, next) {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !email.match(emailRegex)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // If email is valid, move to the next middleware
  next();
}

