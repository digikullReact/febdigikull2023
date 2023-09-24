const fs=require("fs");
const path = require("path");

const create=(data)=>{
    console.log(__dirname)
    // Firsty we have to get the data from the file
    fs.readFile(path.join(__dirname,"db.txt"),"utf-8",(err,fileData)=>{
        if(err){
            console.log(err);
            return err;
        }
        
         if (fileData.length>0){
               // Then insert in the array after converting it in object
               const fileDataParsed=JSON.parse(fileData);
               fileDataParsed.push(data);
               //the save the data in the file again
               fs.writeFile(path.join(__dirname,"db.txt"),JSON.stringify(fileDataParsed),(err,result)=>{
                   if (err){
                        console.log(err);
                        return ;
                   }
                   console.log("Saved In file")
                  
               })

         }else{

            fs.writeFile(path.join(__dirname,"db.txt"),JSON.stringify([data]),(err,result)=>{
                if (err){
                     console.log(err);
                     return ;
                }
                console.log("Saved In file")
               
            })

         }
         



    })



}

module.exports={
    create
}