var express = require('express');
var router = express.Router();
var modeluser = require('../model/user')
/* GET home page. */
router.get('/xem', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
  
  modeluser.find({} , function(err, dulieu){
    if(err){
      console.log(err);
    };
    //res.render('xem', { data: dulieu , title :"Xem" });
    res.send(dulieu)
  });

});
router.post('/them',function(req, res, next){
 

   // Website you wish to allow to connect
   //res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
  //  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
  //  // Request headers you wish to allow
  //  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
  //  // Set to true if you need the website to include cookies in the requests sent
  //  // to the API (e.g. in case you use sessions)
  //  res.setHeader('Access-Control-Allow-Credentials', true);
 
  //  // Pass to next layer of middleware
   
  var phantu = {
    name : req.body.txtName,
    price: parseInt(req.body.txtPrice),
    status : req.body.checkStatus
  };
  var dulieu1 = new modeluser(phantu);
  dulieu1.save().then( dulieu1=>
    res.json({"dulieu":"them thanh cong"})
  ).catch(err =>{
    console.log(err)
  });
   //res.send("req.body")
  // console.log(req.method)
  // res.json("abc")
   console.log(req.body)
})

module.exports = router;
