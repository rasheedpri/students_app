// app.js

const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/studentsRoutes');

const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/students', studentsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});