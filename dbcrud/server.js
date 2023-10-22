require("dotenv").config();
const {sequelize}=require("./db/mysql/mysql");

const app=require("./app");

const mongoose=require("mongoose");
const port=process.env.PORT || 8010

 ConnectMysql=async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
ConnectMysql();

mongoose.connect("mongodb+srv://parishk1024:GankoGotNoChill@mern-auth.ye9s3uc.mongodb.net/digikull?retryWrites=true&w=majority")
.then(res=>{
    console.log("Mongodb connected")
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })
}).catch(err=>{
    console.log(err);
})

