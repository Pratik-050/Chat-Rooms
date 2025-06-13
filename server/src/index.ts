import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;
import Routes from "./routes/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { setupSocket } from "./socket.js";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";

// Create HTTP server
const server = createServer(app);
// Create Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
  adapter: createAdapter(redis),
});

setupSocket(io);
export { io };

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("Running QuickChat Server");
});

//Routes
app.use("/api", Routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
