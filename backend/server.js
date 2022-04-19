require('dotenv').config();

const express = require('express');
const app = express();
PORT = process.env.PORT || 5000;

app.get('/' ,(req , res)=>
{
  res.send("Hello from server")
})

app.listen(PORT ,()=>console.log(`Server listening on ${PORT}`));