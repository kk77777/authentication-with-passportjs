const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Connected to server on port ${PORT}`));
