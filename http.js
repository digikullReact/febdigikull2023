const http=require("http");
const fs=require("fs");
const os=require("os");

const listener=(req,res)=>{
    console.log(req.method);
    if(req.method=="GET"){
        switch (req.url) {
            case "/data":

                res.end("Data route");
    
                
                break;
            case "/home":   
               res.end("Home route");
               break;

               case "/html":  
                fs.readFile("home.html","utf-8",(err,data)=>{
                    if (err){
                        res.end("File Not found");
                        return
                    }
                    res.write(data) 
                    res.end();

                })

            
               break;   
     
         
            default:
                res.end("404 Not Found")
    
                break;
         }

    }else if(req.method=="POST"){
        switch (req.url) {
            case "/data":
                 let body="";
                 req.on("data",(chunk)=>{
                    body=body+chunk;
                 })

                 req.on("end",()=>{
                    //console.log(body.toString());
                    const obj2=JSON.parse(body.toString());

                    fs.readFile("db.json","utf-8",(err,data)=>{
                        if (err){
                            res.end("Error reading file");
                            return
                        }

                        if(data.length>0){
                            // data is there 
                            const obj=JSON.parse(data);

                            // IF the email is already there 

                             const filetred=obj.find(ele=>ele.email==obj2.email);
                             if (!filetred){
                                console.log(obj);
                            obj.push(JSON.parse(body.toString()))
                            const writeData=JSON.stringify(obj)
                            fs.writeFile("db.json",writeData,(err,data)=>{
                                res.end("Data  Added");
        
                            })
                               return;
                             }

                             res.end("Email already esists");

                        }else{
                            const writeData=JSON.stringify([JSON.parse(body.toString())])
                            fs.appendFile("db.json",writeData,(err,data)=>{
                                res.end("Data Added");
        
                            })
                        }
                    })


                 
                   
                 })

    
                
                break;
            

              
     
         
            default:
                res.end("404 Not Found")
    
                break;
         }
    }
     
   

}
const server=http.createServer(listener);

server.listen(8090,()=>{
    console.log("Server Started listening on port ",8090)
})


/**
 * You have to write the append api 
 * such that it only takes unique records 
 * you have to check for unique email
 */