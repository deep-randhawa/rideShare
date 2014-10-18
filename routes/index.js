app = require('../app')

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

require('./users')