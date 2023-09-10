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

/**
 * 1. **Basic Event Creation and Listening**:
    - Create a custom event emitter that emits a `greet` event. Attach a
     listener to this event to print "Hello, World!" when the event is triggered.
 */
     eventObject.on("greet",(data)=>{
        console.log(`Hi ${data["name"]}, ${data.age}`);
     })

     eventObject.emit("greet",{name:"shubham",age:20});


module.exports=eventObject;
