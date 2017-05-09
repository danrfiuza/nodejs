module.exports = function(app) {
    //var Usuario = app.models.usuario;

    var HomeController = {
        index: function(req, res) {
            res.render('home/index');
        },

        //Action login
        login: function(req, res) {
            var email = req.body.usuario.email;
            var nome = req.body.usuario.nome;

            if (email && nome) {
                var usuario = req.body.usuario;
                usuario['contatos'] = [];
                req.session.usuario = usuario;
                req.redirect('/contatos');
            } else {
                res.redirect('/');
            }
        },
        //Action logout
        logout: function(req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };

    return HomeController;
};