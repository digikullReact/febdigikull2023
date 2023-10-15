const User=require("./User");

const Repository={
    FindAll:()=>{
      return  User.find()

    },

    FindOne:(id)=>{
      return  User.findOne({_id:id});

    },
    InsertOne:(body)=>{
      const user=new User(body);

      return user.save();

    }


}

module.exports=Repository;