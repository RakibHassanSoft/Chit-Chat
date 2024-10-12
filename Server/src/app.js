const express = require('express');
const dotenv = require('dotenv');

//Dot Conifg
dotenv.config();
//Create express app
const app = express();

//env variables
const PORT = 8000 || process.env.PORT;

app.get('/',(req,res)=>{
   res.send("Hello from server");
})


app.listen(PORT,()=>{
    console.log(`Server is runnning of ${PORT}`)
})
