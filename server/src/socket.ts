import { Server } from "socket.io";

export const setupSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("message", (data) => {
      console.log(`Message received from ${socket.id}:`, data);
      socket.broadcast.emit("message", {
        id: socket.id,
        message: data.message,
      });
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
