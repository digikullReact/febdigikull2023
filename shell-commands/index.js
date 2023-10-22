const { exec } = require("child_process");
const fs=require("fs");
fs.readFile(".env",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);

    exec(`export ${data}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
      //  console.log(process.env);
    });

})



