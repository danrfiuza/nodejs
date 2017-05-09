var express = require('express'),
    load = require('express-load'),
    error = require('./middleware/error'),
    app = express();
// ...stack de configurações do servidor...
load('models')
    .then('controllers')
    .then('routes')
    .into(app);
// ...app.listen(3000)...
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('ntalk'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(error.notFound);
app.use(error.serverError);
//app.get('/', routes.index);
//app.get('/usuarios', routes.user.index);
app.listen(3000, function() {
    console.log("Ntalk no ar.");
});