const fs=require("fs");
const fsPromise=require("fs/promises");
const os=require("os");
/*
fs.readFile("/Users/shubhpro/Desktop/rec.mov","utf-8",(err,data)=>{
    if (err){
        console.log("Errror",err);
        return;
    }
    console.log(data);

})
fs.writeFile("demo.txt","hello world",(err,data)=>{
    if (err){
        console.log("Errror",err);
        return;
    }
    console.log("File Written successfully");
})

fs.appendFile("demo.txt","hello world"+os.EOL,(err,data)=>{
    if (err){
        console.log("Errror",err);
        return;
    }
    console.log("File Written successfully");
})

fs.unlink("demo.txt",(err,data)=>{

    if (err){
        console.log("Errror",err);
        return;
    }
    console.log("File Deleted successfully");

})

*/
// Promise version---->

// Callback to promises




function ReadFilePromise(fileName){
    const promise=new Promise((res,rej)=>{

        fs.readFile(fileName,"utf-8",(err,data)=>{
            if (err){
                rej(err)
            }
            res(data);
        
        })


    })
  return promise;
}
/*
ReadFilePromise("data.txt").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})
*/

fsPromise.writeFile("data.txt","hello world").then(data=>{
   // console.log("hey-----",data);
}).catch(err=>{
    console.log(err);
})

setTimeout(()=>{
    fsPromise.readFile("data.txt","utf-8").then(data=>{
        console.log("the data",data);
    
    }).catch(err=>{
        console.log(err);
    })

},1000)



fsPromise.appendFile("data.txt","hello world"+os.EOL).then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})

fsPromise.unlink("data.txt").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})