const User=require("./User");

const Repository={
    FindAll:()=>{
      return  User.find()

    }


}

module.exports=Repository;