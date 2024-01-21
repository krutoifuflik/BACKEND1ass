// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
