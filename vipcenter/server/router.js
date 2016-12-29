module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    router.route('/home')
        // PUT /vipcenter/book
        .put(router.action('home').get)
        // GET /vipcenter/book
        .get(router.action('home'));

    // a restful api example
    router.route('/book')
        // PUT /vipcenter/book
        .put(router.action('book').put)
        // GET /vipcenter/book
        .get(router.action('book'));

    router.route('/book/:id')
        // GET /vipcenter/book/1
        .get(router.action('book').get)
        // DELETE /vipcenter/book/1
        .delete(router.action('book').delete);
};