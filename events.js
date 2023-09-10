const EventEmitter=require("events");
const fs= require("fs");
const eventObject=new EventEmitter();

// Registered the listeners
eventObject.on("fileRead",(data)=>{
    console.log("Event emitted----",data);
    for (let i=0;i<data.length;i++){
        fs.writeFileSync(data[i],"data created");

    }
    // You can create those files even --
    // or you can d
})


module.exports=eventObject;
