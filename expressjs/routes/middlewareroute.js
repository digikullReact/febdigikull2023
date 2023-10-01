const express = require("express");
const { PasswordEncryptionController } = require("../controllers/controller");
const { m2, m1, PasswordEncryption } = require("../middlewares/middlewares");
const router = express.Router();


router.get("/",m1,m2,PasswordEncryptionController);

router.post("/",PasswordEncryption,PasswordEncryptionController);


module.exports=router;