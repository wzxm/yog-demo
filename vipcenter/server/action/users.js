let users = require('../model/users.js');

module.exports.get = function(req, res, next) {
	let id = parseInt(req.body.id, 10);
	if(isNaN(id)){
		throw new Error('invalid id');
	}
	users.get(id).then(function(user){
		res.render('vipcenter/page/index.tpl', {
			user: user
		});
	}).catch(next);
}

module.exports.post = function(req, res, next){
	let name = req.body.name;
	let gender = req.body.gender ? 1 : 0;
	if(!name) {
		throw new Error('invalid name');
	}
	users.save({
		name: name,
		gender: gender
	}).then(res.json.bind(this)).catch(next);
}