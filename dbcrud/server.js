const app=require("./app");
const mongoose=require("mongoose");
const port=process.env.PORT || 8010
mongoose.connect("mongodb+srv://parishk1024:GankoGotNoChill@mern-auth.ye9s3uc.mongodb.net/MERN-AUTH?retryWrites=true&w=majority")
.then(res=>{
    console.log("Mongodb connected")
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })
}).catch(err=>{
    console.log(err);
})

