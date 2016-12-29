var yog = require('yog2-kernel');

module.exports.get = function(id){
	return yog.ralP('BACKEND', {
		path: 'api/user',
		method: 'GET',
		data: {
			id: id
		}
	});
};
module.exports.save = function(user){
	return yog.ralP('BACKEND', {
		path: 'api/user',
		method: 'PPOST',
		pack: 'form',
		data: user
	});
};