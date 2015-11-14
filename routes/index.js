var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express',
		users: [
			{ name: "yuta nakamura", email: "yuta.nakamura.i7@gmail.com" },
			{ name: "hiromi", email: "picopicopichan@gmail.com" }
		]
	});
});

module.exports = router;
