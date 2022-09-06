const path=require('path')
const controladores={home:(req,res)=>{res.SendFile(path.join(__dirname,"../views/home.html"))}
,about:(req,res)=>{res.SendFile(path.join(__dirname,"../views/about.html"))},};
module.exports=controladores;
