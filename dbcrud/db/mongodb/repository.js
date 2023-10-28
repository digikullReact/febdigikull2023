const User=require("./User");

const Repository={
    FindAll:()=>{
      return  User.find()

    },

    // skip and limit
    FindAllPagination:async (pageSize,offset,search,sort)=>{
 
   const data=await  User.find({name:new RegExp(search,'i')}).skip(offset)
      .limit(pageSize).sort({name:parseInt(sort)})
      const count=await User.count(); // it will return the total number of records

      return{
        data:data,
        count:count
      }

    },

    FindOne:(id)=>{
      return  User.findOne({_id:id});

    },
    InsertOne:(body)=>{
      const user=new User(body);

      return user.save();

    },

    InsertMany:(body)=>{
      return User.insertMany(body);
     

    },
    UpdateOne:(body,id)=>{
       return User.updateOne({_id:id},{$set:body});

    },
    DeleteOne:(id)=>{
       return User.deleteOne({_id:id});

    },
    UpdateMany:(name,body)=>{
      return User.updateMany({name:name},{$set:body});

   },

   DeleteMany:(name,body)=>{
    return User.updateMany({name:name});

 }




}



// Name ---> //city 

module.exports=Repository;