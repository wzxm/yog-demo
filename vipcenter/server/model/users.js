var yog = require('yog2-kernel');

module.exports.getMap = function(id){
	return yog.ralP('MAPAPI', {
        data: {
            query: id
        }
    });
};

module.exports.save = function(user){
	return yog.ralP('BACKEND', {
		path: 'api/user',
		method: 'POST',
		pack: 'form',
		data: user
	});
};