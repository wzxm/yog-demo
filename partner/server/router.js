module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    // a restful api example
    router.route('/book')
        // PUT /partner/book
        .put(router.action('book').put)
        // GET /partner/book
        .get(router.action('book'));

    router.route('/book/:id')
        // GET /partner/book/1
        .get(router.action('book').get)
        // DELETE /partner/book/1
        .delete(router.action('book').delete);
};