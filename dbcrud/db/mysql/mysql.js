const { Sequelize ,DataTypes} = require('sequelize');
const sequelize = new Sequelize('digikull', 'admin', 'sA1VeFK7', {
    host: 'mysql-151574-0.cloudclusters.net',
    port:'14609',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const User = sequelize.define('user', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  const CreateUser=async (body)=>{
    return await User.create(body);


  }

  const readUser=async (id)=>{
    return await User.findOne({
      where:{
        id:id
      }
    })
 }

 const readAllUser=async (pageSize,offset,search,sort)=>{
  return await User.findAll(); // you have to add pagination to it 
}

  const updateUser=async (body,id)=>{
    return await User.update({name:body.name,email:body.email},{
      where: {
        id: id
      }
    })


  }

  const upsertUser=async (body,id)=>{
    return await User.upsert({name:body.name,email:body.email,id:id},{
      where: {
        id: id
      }
    })


  }



  const deleteUser=async (id)=>{
    return await User.destroy({
      where: {
        id: id
      }
    })
}



  


  module.exports={
    sequelize,
    CreateUser,
    readUser,
    updateUser,
    deleteUser,
    readAllUser,
    upsertUser,
    upsertUser
  }