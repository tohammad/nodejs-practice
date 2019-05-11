const app = require('express')();


app.get('/', function(req, res, next) {
  res.send('successs');
});

app.get('/error', function(req, res, next) {
  next(new Error('woops'));
});

app.use(function(error, req, res, next) {
  // Will get here
  res.json({ message: error.message });
});

app.listen(3000);