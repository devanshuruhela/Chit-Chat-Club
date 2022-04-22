require('dotenv').config();
const DbConnect = require('./database')
const express = require('express');
const app = express();
const cors = require('cors')
const router  =require('./routes')
PORT = process.env.PORT || 5000;

const corsOption = {
  origin: [process.env.FRONT_URL],
};
app.use(cors(corsOption));

DbConnect();
app.use(express.json())
app.get('/' ,(req , res)=>
{
  res.send("Hello from server")
})

app.use(router);

app.listen(PORT ,()=>console.log(`Server listening on ${PORT}`));