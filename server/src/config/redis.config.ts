import { Redis } from "ioredis";

//use ioredis to connect to a Redis server
// This configuration is used for socket.io to use Redis as a message broker
// This is used so that multiple instances of the server can communicate with each other
// and share the same socket.io events
// This is useful for scaling the application horizontally
// and for handling large number of concurrent connections
const redis = new Redis({
  host: "localhost",
  port: 6379,
});

export default redis;
