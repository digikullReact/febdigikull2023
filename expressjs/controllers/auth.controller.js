const fs=require("fs");
const path = require("path");

const Signup=(req,res)=>{
    // Do some controller signup logic
    // We will save the data in the fileMemory
    // We will check if the username exists or not
    
    fs.readFile(path.join(__dirname,"users.json"),"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            // The part for error middleware as well
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
                    return
                }
                res.json({
                    message:"User Saved SuccessFully"
                })

            })
       

        }else{
            console.log("User Already exists");
            // Call the error middleware
            return
        }
        
        }else{
            

        }




    })


}



const Login=(req,res)=>{
    // We will check for the user 

}

module.exports={
    Signup,
    Login
}