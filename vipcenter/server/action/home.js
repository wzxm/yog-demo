/**
 * [exports 此时无论是 GET 请求还是 POST 请求，都会先经过 module.exports 
 * 函数处理后再进入各自的 METHOD 函数，因此我们可以将 module.exports 函数视为 URL 级别的通用处理逻辑。]
 * @anotherdate 2016-12-28T20:18:30+0800
 * @author wangzhe
 * @function    [function]
 * @example     [example]
 * @param       {[type]}                 req [description]
 * @param       {[type]}                 res [description]
 * @return      {[type]}                     [description]
 */
module.exports = function(req, res){
    res.render('vipcenter/page/home.tpl');
};

module.exports.get = function(req, res, next){
    res.render('vipcenter/page/home.tpl');
};

module.exports.put = function(req, res, next){
    res.render('vipcenter/page/home.tpl');
};