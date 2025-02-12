
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

app.use(bodyparser.json());

app.use('/admin', adminRouter);

app.use('/user', userRouter);

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
