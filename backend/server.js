const app = require('./app');
const dbConnect = require('./utils/db');
const dotenv =require('dotenv')

dotenv.config()


// connecting to database
dbConnect();
const PORT = process.env.PORT||4000

app.listen(8020,()=>
{
    console.log(`listening on ${PORT} `)
})