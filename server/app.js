const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

// logger middleware
app.use(morgan('dev'));
app.use(express.json());

// to send static files
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/panda', (req, res, next) => {
  const pan = { name: 'panda', somethign: 3 };
  res.send(pan);
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
