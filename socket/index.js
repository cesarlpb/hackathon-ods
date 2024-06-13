import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: 'http://localhost:5173'
  }
});

io.on("connection", (socket) => {
  console.log('Socket is connected');
});

console.log('Running...');