const EventEmitter=require("events");
const eventObject=new EventEmitter();

// Registered the listeners
eventObject.on("fileRead",(data)=>{
    console.log("Event emitted----",data);
    // You can create those files even --
    // or you can d
})


module.exports=eventObject;
