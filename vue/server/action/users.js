module.exports = function(req, res){
    res.send('book index');
};

module.exports.get = function(req, res, next){
    res.send('get book ' + req.params.id);
};

module.exports.post = function(req, res, next){
    var form = new yog.multiparty.Form();
    form.parse(req, function (err, fields, files) {
        var name = fields.name;
        var gender = fields.gender ? 1 : 0;
        var avatar = (files && files.length > 0) ? files[0] : null;
        if (!name) {
            throw new Error('invalid name');
        }
        userModel.save({
                name: name,
                gender: gender,
                avatar: avatar
            })
            .then(res.json.bind(this))
            .catch(next);
    });
};

module.exports.put = function(req, res, next){
    res.send('put book');
};

module.exports.delete = function(req, res, next){
    res.send('delete book ' + req.params.id);
};