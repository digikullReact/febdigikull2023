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
  


  module.exports={
    sequelize,
    CreateUser
  }