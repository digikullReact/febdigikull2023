const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000"]
    }
  });

  app.use(express.static('build'));

  app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
      });

io.on("connection", (socket) => {
  // ...
  console.log("Client connected",socket.id)
  socket.on("mymessage",(data)=>{
    socket.broadcast.emit("reply",data);
   
  })
});

httpServer.listen(8090,()=>{
    console.log("Socket server created")
});