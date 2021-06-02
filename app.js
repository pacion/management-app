const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const apiVersionRoutes = require('./routes/apiVersionRoutes');
const frontRoutes = require('./routes/front/frontRoutes');
const authMiddleware = require('./middlewares/auth');

const { notFound, catchErrors } = require('./middlewares/errors');

const app = express();

require('dotenv').config();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('*', authMiddleware.checkUser);
app.use('/api', apiVersionRoutes); // api - back
app.use('', frontRoutes) // user - front



app.use(notFound);
app.use(catchErrors);

module.exports = { app };
