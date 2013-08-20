var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost/angularkt";

exports.query = function(req, res) {
	MongoClient.connect(dbUrl, function(err, db) {
		if (err)
			throw err;
		console.log("Start query from MongoDB.");
		db.collection(req.params.doc).find().toArray(function(err, docs) {
			res.json(docs);
			db.close();
		});

		console.log("Query successful !!!");
	});
};

exports.save = function(req, res) {
	MongoClient.connect(dbUrl, function(err, db) {
		if (err)
			throw err;
		console.log("Start save from MongoDB.");
		db.collection(req.params.doc).insert(req.body, {
			w : 1,
			upsert : true
		}, function(err, objects) {
			if (err)
				console.warn(err.message);
		});
		res.send("Success!!");
		db.close();
		console.log("Save successful !!!");
	});
};