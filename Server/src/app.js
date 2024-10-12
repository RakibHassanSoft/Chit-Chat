const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoSanatize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser')
const compression = require('compression')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const connectDB = require('./configs/db');
const routers = require('./routes/auth.route')
connectDB();
//Dot Conifg
dotenv.config();

//Create express app
const app = express();

//Helmet
app.use(helmet());
//Accept json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//sanatize request data
app.use(mongoSanatize());
//Enable cookie parser
app.use(cookieParser());
//Enable compression
app.use(compression())
//file upload
app.use(fileUpload({
    useTempFiles:true
}));
//Enable cors
app.use(cors())
// app.use(cors({
//     origin:'http://localhost:3000',

// }))

//Routers
// Use your routes
app.use('/api/v1', routers);
//http://localhost:8000/api/v1/auth/register

//env variables
const PORT = 8000 || process.env.PORT;

app.get('/',(req,res)=>{
   res.send("Hello from server");
})



//Import route


app.listen(PORT,()=>{
    console.log(`Server is runnning of ${PORT}`)
})

