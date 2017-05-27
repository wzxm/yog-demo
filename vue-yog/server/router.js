var fs = require('fs');
var path = require('path');

module.exports = function(router){

    // router.use('/', function(req, res, next){
    //     console.log(123)
    // });

    router.route('/user')
        .put(router.action('users').get)
        .get(router.action('users'));
    
    router.route('/user/:id')
        .get(router.action('users').get);
    
    router.route('/user/header/upload')
        .post(router.action('users').post);
};