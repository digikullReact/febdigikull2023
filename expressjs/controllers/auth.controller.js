const fs=require("fs");
const path = require("path");
const  jwt = require('jsonwebtoken');


const Signup=(req,res,next)=>{
    // Do some controller signup logic
    // We will save the data in the fileMemory
    // We will check if the username exists or not
    
    fs.readFile(path.join(__dirname,"users.json"),"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            // The part for error middleware as well
            next(err);

            return
        }
        // convert the data into object
        else if(data.length>0){
            const users=JSON.parse(data);
        const user=users.find(ele=>ele.userName==req.body.userName);
        if (!user){
            // Then only we will save the data
            users.push(req.body);
            // We will replace the data in the file again

            fs.writeFile(path.join(__dirname,"users.json"),JSON.stringify(users),(err,data)=>{
                if(err){
                    console.log(err);
                    // We will call the error middleware again
                    next(err);
                    return
                }
                res.json({
                    message:"User Saved SuccessFully"
                })

            })
       

        }else{
            console.log("User Already exists");
            // Call the error middleware
            next("User Already Exists");
            return
        }
        
        }else{
            fs.writeFile(path.join(__dirname,"users.json"),JSON.stringify(users),(err,data)=>{
                if(err){
                    console.log(err);
                    // We will call the error middleware again
                    next(err);
                    return
                }
                res.json({
                    message:"User Saved SuccessFully"
                })

            })

        }




    })


}



const Login=(req,res,next)=>{
    fs.readFile(path.join(__dirname,"users.json"),"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            // The part for error middleware as well
            next(err);
            return
        }

        // We will see if the data exists
        if (data.length>0){

            // Data exists

            const users=JSON.parse(data);
            const user=users.find(ele=>ele.userName==req.body.userName);
            if (!user){

                 next("UserName Not found");
                 return;
            }
            // user exists we will match the password as well

            if (user.password==req.body.password){
                // Then we will issue the jwt here 
                console.log("User found");
                const  token = jwt.sign({ userName: user.userName }, 'shhhhh');
                  res.json({
                    token
                  })


            }else{
                next("UserName or password not correct");
            }
            

        } else{
            next("User Not found");
        }

    })


}

module.exports={
    Signup,
    Login
}