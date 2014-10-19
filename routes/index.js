app = require('../app')

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Ride-Share' });
});

app.get('/new-ride', function(req, res) {
  res.render('new-ride', { title: 'Ride-Share'});
});