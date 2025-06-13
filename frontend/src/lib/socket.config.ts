import { io, Socket } from "socket.io-client";
import Env from "./env";

let socket: Socket; //if socket is already initialized, reuse it
// if not, create a new socket instance
// This prevents multiple connections to the same socket server
// and ensures that the socket is only created once, improving performance and resource management.
export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, {
      autoConnect: false,
    });
  }
  return socket;
};
