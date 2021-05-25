const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const apiVersionRoutes = require('./routes/apiVersionRoutes');
const { notFound, catchErrors } = require('./middlewares/errors');

const app = express();

require('dotenv').config();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/api', apiVersionRoutes);

app.use(notFound);
app.use(catchErrors);

module.exports = { app };
