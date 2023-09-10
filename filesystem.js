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

/**
 * 
 
1. **Basic Event Creation and Listening**:
    - Create a custom event emitter that emits a `greet` event. Attach a listener to this event to print "Hello, World!" when the event is triggered.

2. **Passing Data with Events**:
    - Create an event emitter that emits a `dataReceived` event and sends an object with `name` and `age` properties. Write a listener to print these details in the format: "Received data for [name] aged [age]."

3. **Event Counter**:
    - Create an event emitter that emits a `click` event every time a function `simulateClick` is called. Attach a listener that counts and prints the total number of clicks received.

4. **Once Listeners**:
    - Create an event emitter that emits a `firstTime` event. Attach a listener using the `.once()` method to ensure it only reacts to the first trigger.

5. **Removing Listeners**:
    - Create an event emitter that emits a `repeatedTask` event. Attach a listener, but after the third event emission, remove the listener to stop further reactions.

6. **Error Events**:
    - Emit an `error` event with an associated error message. Attach a listener to gracefully handle and print this error.

7. **Chaining Events**:
    - Emit a `start` event. Once the `start` event is processed, immediately emit a `process` event, and after that, emit a `complete` event. Ensure that each step logs to the console.

8. **Multiple Listeners**:
    - Emit a `multiListener` event. Attach three listeners to it. One prints the data received, the second multiplies the data by 2 and prints it, and the third logs a thank you message.

9. **Conditional Emit**:
    - Create an event emitter that emits a `temperatureWarning` event only when the temperature (passed to a function) exceeds 30°C.

10. **Combining with Promises**:
    - Simulate a data-fetching operation using an event. Once the data is "fetched" (you can mock this with a timeout), emit a `dataFetched` event. Now, wrap this entire operation in a promise and resolve when data is fetched.


 */