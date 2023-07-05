var express = require("express")
var router = express.Router();

router.get('/',function(req,res){
   //functionality
   res.send("API is running");

})
module.exports = router
