require('dotenv').config();
const DbConnect = require('./database')
const express = require('express');
const app = express();
const cors = require('cors')
const router =require('./routes')
const cookieParser = require("cookie-parser");
const server = require('http').createServer(app);

const io = require('socket.io')(server , {
  cors:
  {
    origin:process.env.FRONT_URL,
    methods:['GET', 'POST'],
  }
});


PORT = process.env.PORT || 5000;
app.use(cookieParser());
const corsOption = {
  origin: [process.env.FRONT_URL],
  credentials:true
};
app.use(cors(corsOption));
app.use('/storage',express.static('storage'))
DbConnect();
app.use(express.json({limit:'8mb'}))
app.get('/' ,(req , res)=>
{
  res.send("Hello from server")
})

app.use(router);

// socket
io.on('connection' , (socket) =>
{
  console.log('new conncetion' , socket.id)
})


server.listen(PORT ,()=>console.log(`Server listening on ${PORT}`));