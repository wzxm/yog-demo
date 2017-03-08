var index = require('../model/index.js');
var util = require('../lib/util.js');

module.exports = function(req, res, next){
    res.render('vipcenter/page/index.tpl', {
    	data: index.getData(),
    	name: 'wangzhe'
    });
};