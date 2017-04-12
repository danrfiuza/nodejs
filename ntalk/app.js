var express = require('express')
, load = require('express-load')
, app = express();
// ...stack de configurações do servidor...
load('models')
.then('controllers')
.then('routes')
.into(app);
// ...app.listen(3000)...
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.get('/', routes.index);
//app.get('/usuarios', routes.user.index);
app.listen(3000, function(){
console.log("Ntalk no ar.");
});
