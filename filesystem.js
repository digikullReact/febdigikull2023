const fs=require("fs");

fs.readFile("/Users/shubhpro/Desktop/rec.mov","utf-8",(err,data)=>{
    if (err){
        console.log("Errror",err);
        return;
    }
    console.log(data);

})

console.log("hey there");