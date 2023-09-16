const http=require("http");
const fs=require("fs");

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

    }else{
        res.end("Method Not supported");
    }
     
   

}
const server=http.createServer(listener);

server.listen(8090,()=>{
    console.log("Server Started listening on port ",8090)
})