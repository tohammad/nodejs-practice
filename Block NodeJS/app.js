const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, World'));

app.get('/block', (req, res) => {
  const end = Date.now() + 10000;
  while (Date.now() < end) {
    // heavy operation
  }
  res.send('I am done!');
});

app.get('/non-block', (req, res) => {
  
  setTimeout(() => res.send('I am done!'), 5000);
});

app.listen(3000, () => console.log('app listening on port 3000'));