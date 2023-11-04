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
    salary:Number,
    password:String,
    date: { type: Date, default: Date.now },
    
  });
  const userModel=mongoose.model("user",userSchema);

  // hooks 

  userSchema.pre('save',async function(next){
    const user =this;
     if (user.isModified('password')){
      // hash the password
      user.password="hashed password function"
     }

     next();

  })

  userSchema.post('save',async function(next){
   console.log("user saved")
    


  })


 module.exports=userModel;


