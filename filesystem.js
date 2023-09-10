const fs=require("fs");
const fsPromise=require("fs/promises");
const os=require("os");
const eventObject=require("./events");
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
    console.log("heyy",data);

}).catch(err=>{
    console.log(err);
})

fsPromise.unlink("data.txt").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})
*/



/*
fs.readFile("data.txt","utf-8",(err,data)=>{
    if (err){
        console.log("Errror",err);
        return;
    }
    console.log(data);

})
console.log(9999);

console.log(fs.readFileSync("data.txt","utf-8")) // blocking operation
console.log("helo post reading file---")
fs.writeFileSync("demo.txt","hello world")

fs.appendFileSync("demo.txt","hello world"+os.EOL)

fs.unlinkSync("demo.txt")

console.log(fs.readFileSync("data.txt","utf-8")) // blocking operation
fs.writeFileSync("demo.txt","hello world")

fs.appendFileSync("demo.txt","hello world"+os.EOL)

fs.unlinkSync("demo.txt")
console.log("helo post all operations on file---")
*/



// Directory reading ---->
// You have to write a function that recursively reads the directory 
const mainDir="directory"
let directoryArray=[];
function Recursive(mainDir){

  let data=  fs.readdirSync(mainDir)
    for (let i=0;i<data.length;i++){
        console.log(fs.statSync(`${mainDir}/${data[i]}`))
        if(fs.lstatSync(`${mainDir}/${data[i]}`).isDirectory()){
            Recursive(`${mainDir}/${data[i]}`)
        }else{
            directoryArray.push(data[i])
        }
      
    }

}

Recursive(mainDir)
eventObject.emit("fileRead",directoryArray)
//console.log(directoryArray);