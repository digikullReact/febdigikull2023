const express=require("express");
const Controller = require("../controllers/mongo.controller");
const router=express.Router();
router.get("/",Controller.Get)

router.post("/",Controller.Post)

router.put("/",Controller.Put)

router.delete("/",Controller.Delete)

module.exports=router;