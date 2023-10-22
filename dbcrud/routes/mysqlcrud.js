const express=require("express");
const Controller = require("../controllers/mysql.controller");
const router=express.Router();
router.get("/",Controller.Get)
router.get("/pagination",Controller.GetPaginated)

router.put("/updateMany",Controller.PutMany)
router.post("/insertMany",Controller.PostMany)



router.get("/:id",Controller.GetOne)


router.post("/",Controller.Post)

router.put("/:id",Controller.Put)



router.delete("/:id",Controller.Delete)

module.exports=router;