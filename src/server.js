const express = require('express');
const app = express();
app.use(express.json());

require('./app/routes')(app);

const { port } = require('./config').app;
app.listen(port, console.log('Listen on port 3000'));
