require('dotenv').config();
const DbConnect = require('./database')
const express = require('express');
const app = express();

const router  =require('./routes')
PORT = process.env.PORT || 5000;

DbConnect();
app.use(express.json())
app.get('/' ,(req , res)=>
{
  res.send("Hello from server")
})

app.use(router);

app.listen(PORT ,()=>console.log(`Server listening on ${PORT}`));