const express = require ('express');
const app = express();
const router = require('./routers/productrouter');
const userRouter = require('./routers/userRouter');
const bodyParser = require('body-parser');

const { errorHandler}= require('./middleware/errorMiddleware')
const cors = require('cors');


app.use(express.json())
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// app.use(errorHandler);
app.use(router);
app.use(userRouter);






module.exports= app;