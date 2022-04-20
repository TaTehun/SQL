const express = require('express');
const User = require('./models/user')
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

//middleware
app.use(usersRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT);