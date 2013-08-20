
exports.angularApi = function(req, res) {
	res.render('apis/' + req.params.api + '.html', {
		title : 'APIS'
	});
};

exports.angularApp = function(req, res) {
	res.render('apps/' + req.params.app + '.html', {
		title : 'APPS'
	});
};