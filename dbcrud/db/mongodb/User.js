const mongoose=require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email:String,
    about:String,
    image:String,
    username:{
      type:String,
      unique: true 

    },
    password:String,
    date: { type: Date, default: Date.now },
    
  });
  const userModel=mongoose.model("user",userSchema);
 module.exports=userModel;


