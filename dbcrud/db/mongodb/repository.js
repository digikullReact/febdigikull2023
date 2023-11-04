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

 },

 DeleteAll:()=>{
  return User.deleteMany();

},

 /**
  * $project
  * $match  // which exactly works like filtering
$group
$sort
$skip & $limit
$first & $last
$unwind
  */
/*
 SumSalary:(name)=>{
  return User.aggregate([
    {
      $match:{name:name}
    }

  ])


 }
 */

 SumSalary:(name)=>{
  return User.aggregate([
    {
      $group:{
        "_id":null,
        totalSalary:{$sum:"$salary"},
     
      }
    },{
      $project:{
        _id:0 ,// excluding the _id from the output
        totalSalary:1
      }
    }

  ])


 }



}



// Name ---> //city 
// Task---->
// The average salary 
// Try to find the total count of employees using aggregation pipeline

module.exports=Repository;