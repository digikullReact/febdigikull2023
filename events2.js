const EventEmitter=require("events");
const fs= require("fs");
const eventObject=new EventEmitter();
let counter=0;
// this once will trigger the listener only once
eventObject.once("click",()=>{
    counter++;
    console.log("Counter",counter);
})
eventObject.on("click",()=>{
    counter++;
    console.log("Counter",counter);
})
/**
 * **Event Counter**:
    - Create an event emitter that emits a `click` event every 
    time a function `simulateClick` is called. Attach a listener that counts and 
    prints the total number of clicks received.
 */
function simulateClick(eventObject){
    eventObject.emit("click");
}
/*
for (let i=0;i<10;i++){
    simulateClick(eventObject)
}



 * 
 * **Removing Listeners**:
    - Create an event emitter that emits a `repeatedTask` event. 
    Attach a listener, but after the third event emission, 
    remove the listener to stop further reactions.
     let count=0;
    eventObject.on("repeatedTask",()=>{
        console.log("eventemitted",count);
        if(count>3){
            // We have to remove the event
            eventObject.removeListener("repeatedTask")  // it will remove the repeated task event
        }
        count++;

    })  
    for (let i=1;i<5;i++){
        eventObject.emit("repeatedTask");
    } 
 */
    

    /**
     * **Chaining Events**:
    - Emit a `start` event. Once the `start` event is processed, immediately emit a 
    `process` event, and after that, emit a `complete` event. 
    Ensure that each step logs to the console.
     */
    const eventObject2=new EventEmitter();
    eventObject2.on("start",()=>{
        console.log("start event happend");
        eventObject2.emit("process");
    })

    eventObject2.on("process",()=>{
        console.log("process event happend");
        eventObject2.emit("complete");
    })

    eventObject2.on("complete",()=>{
        console.log("Event executeion completed");
   
    })
    
    //eventObject2.emit("start")


    /**
     * 
     * **Multiple Listeners**:
    - Emit a `multiListener` event. Attach three listeners to it. 
    One prints the data received, the second multiplies the data by 2 
    and prints it, and the third logs a thank you message.
     * 
     */

    const eventObject3=new EventEmitter();
    eventObject3.on("multiListener",(data)=>{
        console.log("The data is ",data)
    })

    eventObject3.on("multiListener",(data)=>{
        console.log("The data multiplied ",data*2)
    })
    eventObject3.on("multiListener",(data)=>{
        console.log("Thankyou")
    })
  //  eventObject3.emit("multiListener",2)

  /**
   * 
   * Combining with Promises**:
    - Simulate a data-fetching operation using an event. 
    Once the data is "fetched" (you can mock this with a timeout),
     emit a `dataFetched` event. 
     Now, wrap this entire operation in a promise and resolve when data is fetched.
   * 
   */
  const promise=new Promise((res,rej)=>{

    const eventObject4=new EventEmitter();

    eventObject4.on("datafetched",(data)=>{
        res(data)
    
    })
    setTimeout(()=>{
        eventObject4.emit("datafetched","hey there data")
    
    },5000)
    

  })


  promise.then(data=>{
    console.log("Data from promise",data)
  }).catch(err=>{
    console.log(err);
  })
   