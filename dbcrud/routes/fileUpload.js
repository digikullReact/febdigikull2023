const express=require("express");
const router=express.Router();
const multipart = require('connect-multiparty');
const path = require("path");
const  multipartMiddleware = multipart({uploadDir:path.join(__dirname,"../uploads")});
const cloudinary=require("cloudinary");
const fs=require("fs");
cloudinary.config({ 
    cloud_name: 'shubhamdixit78788', 
    api_key: '755683721392763', 
    api_secret: '_68MF_J-kr0Z5Iw29XmSZmyxEFE' 
  });


router.post("/",multipartMiddleware,async(req,res)=>{
//https://cloudinary.com/documentation/node_quickstart#2_upload_an_image
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      };

      console.log(req.files.file.path)
      try {
        const result = await cloudinary.uploader.upload(req.files.file.path, options);
        ///console.log(result)
      

        fs.unlink(req.files.file.path,(err,data)=>{
            if(err){
                console.log(err);
                res.json({
                    error:error
                })
                return;
            }
            console.log("file delete success fully")
            res.json({
                message:"Success",
                data:result.url
            })
        })


    
        
      } catch (error) {
            ///console.log(result)
            res.json({
                error:error
            })
        console.log(error);
      }
    
 

})


module.exports=router;