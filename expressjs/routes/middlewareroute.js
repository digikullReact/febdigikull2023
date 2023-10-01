const express = require("express");
const { PasswordEncryptionController } = require("../controllers/controller");
const { m2, m1, PasswordEncryption, RouteslevelMiddleware } = require("../middlewares/middlewares");
const router = express.Router();

// route level middlwares
router.use(RouteslevelMiddleware)

router.get("/",m1,m2,PasswordEncryptionController); // m1 and m2 are route level middleware

router.post("/",PasswordEncryption,PasswordEncryptionController);


module.exports=router;