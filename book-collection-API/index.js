const express = require('express')
const categoryRoutes = require('./routes/categoryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const logger=require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const app = express()
const port=3000;
app.use(express.json())
app.use(logger);

app.use('/categories',categoryRoutes);
app.use('/books',bookRoutes);

app.use(errorHandler);

app.listen(port);