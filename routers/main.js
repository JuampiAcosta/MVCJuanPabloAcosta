const express=require('express')
const mainController=require('../controllers/mainController')
const router=express.Router();
router.get("/",mainController.home)
router.get("/",mainController.about)
module.exports=router;