const express = require ('express');
const app = express();
const router = require('./routers/productrouter');
const userRouter = require('./routers/userRouter');
const categoryrouter = require('./routers/categoryrouter')
const { errorHandler}= require('./middleware/errorMiddleware')
const cors = require('cors');


app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

// app.use(errorHandler);
app.use(router);
app.use(userRouter);
app.use(categoryrouter)





module.exports= app;