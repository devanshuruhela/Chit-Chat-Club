require('dotenv').config();
const DbConnect = require('./database')
const express = require('express');
const app = express();
const cors = require('cors')
const router =require('./routes')
const cookieParser = require("cookie-parser");
PORT = process.env.PORT || 5000;
app.use(cookieParser());
const corsOption = {
  origin: [process.env.FRONT_URL],
  credentials:true
};
app.use(cors(corsOption));

DbConnect();
app.use(express.json({limit:'8mb'}))
app.get('/' ,(req , res)=>
{
  res.send("Hello from server")
})

app.use(router);

app.listen(PORT ,()=>console.log(`Server listening on ${PORT}`));