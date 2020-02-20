var express = require('express');
var router = express.Router();
var modeluser = require('../model/user')
/* GET home page. */
router.get('/quan-ly-san-pham', function (req, res, next) {
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

	modeluser.find({}, function (err, dulieu) {
		if (err) {
			console.log(err);
		};
		//res.render('xem', { data: dulieu , title :"Xem" });
		//res.json(dulieu)
		res.send(dulieu)
	});

});
router.get('/quan-ly-san-pham/:id', (req, res, next) => {
	var id = req.params.id;
	modeluser.findById(id, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.json(data)
		}
	})


})
router.put('/quan-ly-san-pham/sua/:id', (req, res, next) => {
	var id = req.params.id;
	console.log(req.body.id);
	modeluser.findById(id, (err, data) => {
		if (err) {
			console.log(err)
		}
		else {
			//console.log(typeof (req.body.checkStatus))
			data.name = req.body.txtName;
			data.price = parseInt(req.body.txtPrice);
			data.status = req.body.checkStatus;
			data.save().then(() => {
				console.log("them thanh cong")
				res.send("Cap nhat thanh cong")
			}).catch(err => {
				console.log(err)
			});
			// console.log(data)
		}
	 })



	//res.redirect('https://www.google.com/')
	// modeluser.findById(id,(err, data)=>{
	//    if (err) throw err;
	//    data.name = req.body.txtName;
	//    data.price = parseInt(req.body.txtPrice)
	//    data.save();
	// })
	// modeluser.findByIdAndUpdate(id, { $set:{ name: req.body.txtName,price: parseInt( req.body.txtPrice), status:req.body.checkStatus }} ,()=>{

	// })

	//res.send(req.body)

})
router.delete('/quan-ly-san-pham/xoa/:id', (req, res, next) => {
	console.log("test")
	var id = req.params.id;
	modeluser.findByIdAndRemove(id, function (err, product) {
		if (err) res.json(err);
		else res.json('Successfully removed' + { product });
	})
})
router.post('/quan-ly-san-pham/them', function (req, res, next) {




	var phantu = {
		name: req.body.txtName,
		price: parseInt(req.body.txtPrice),
		status: req.body.checkStatus
	};
	var dulieu1 = new modeluser(phantu);
	dulieu1.save().then(dulieu1 =>
		res.json({ "dulieu": "them thanh cong" })
	).catch(err => {
		console.log(err)
	});
	//res.send("req.body")
	// console.log(req.method)
	// res.json("abc")
	console.log(req.body)
})


module.exports = router;
