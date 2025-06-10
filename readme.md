# 🗨️ Chat-Rooms

A full-stack real-time chat application built with:

- [Next.js](https://nextjs.org/) (Frontend & Backend)
- [TypeScript](https://www.typescriptlang.org/) (Type Safety)
- [PostgreSQL](https://www.postgresql.org/) (Relational Database)
- [Socket.IO](https://socket.io/) (WebSockets for live communication)
- [Kafka](https://kafka.apache.org/) (Message Queue / Event Streaming)
- [Redis](https://redis.io/) (Caching / Pub-Sub)

## Features

- User Authentication (JWT / OAuth)
- Real-time 1:1 and group messaging
- Message delivery acknowledgments
- Kafka-based message queuing
- Redis pub/sub for event propagation
- Persistent chat storage via PostgreSQL
- Scalable and production-ready architecture

---

## Tech Stack

| Layer     | Tech Used                                                |
| --------- | -------------------------------------------------------- |
| Frontend  | Next.js, Tailwind CSS, Socket.IO Client                  |
| Backend   | Next.js API Routes, Express (optional), Socket.IO Server |
| Database  | PostgreSQL + Prisma ORM                                  |
| Messaging | Kafka for decoupled message handling                     |
| Caching   | Redis (for sessions, pub/sub)                            |
| Auth      | NextAuth.js or JWT                                       |
| Dev Tools | Docker, ESLint, Prettier, Husky                          |

---
