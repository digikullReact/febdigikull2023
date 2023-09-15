const fs=require("fs");
/*
fs.readFile("large.txt","utf-8",(err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data)
})
*/
const rs=fs.createReadStream("events.js");
const ws =fs.createWriteStream("largecopy.txt");




rs.pipe(ws);
let counter=0;
rs.on("data",(data)=>{
    // Write in the file here using after converting to uppercase fs.append()
    counter++;
  //  console.log(data.toString());
})

rs.on("end",()=>{
    console.log(counter);
})

// Read streams
// Write streams 
// Duplex streams -which deal with both read and write

/**
 * 
 * 1-Write a Node js program that reads a file named lowercase.txt
 * converts its content to upper case
 * and then writes to to the uppercase.txt
 * 
 * 2- Write a Node js program, that reads content and every time the data event is fired
 * you have to count the chunks recevd and print the total number of chunks
 * 
 */