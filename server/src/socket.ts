import { Server, Socket } from "socket.io";
import prisma from "./config/db.config.js";

interface CustomSocket extends Socket {
  room?: string;
}

interface CustomMessage {
  id: string;
  message: string;
  created_at: string;
  group_id: string;
  name: string;
}

export const setupSocket = (io: Server) => {
  // Middleware to handle room authentication
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room;

    if (!room) {
      return next(new Error("Invalid room"));
    }
    socket.room = room;
    next();
  });

  io.on("connection", (socket: CustomSocket) => {
    console.log(`User connected: ${socket.id}`);

    // Join the room specified in the authentication
    socket.join(socket.room);

    socket.on("message", async (data) => {
      console.log(`Message received from ${socket.id}:`, data);

      await prisma.chats.create({
        data: data as CustomMessage,
      });
      socket.to(socket.room).emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
