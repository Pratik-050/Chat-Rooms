# 🗨️ Chat-Rooms

A full-stack real-time chat application built with:

- [Next.js](https://nextjs.org/) (Frontend & Backend)
- [TypeScript](https://www.typescriptlang.org/) (Type Safety)
- [PostgreSQL](https://www.postgresql.org/) (Relational Database)
- [Socket.IO](https://socket.io/) (WebSockets for live communication)
- [Redis](https://redis.io/) (Caching / Pub-Sub)

## Features

- User Authentication (JWT / OAuth)
- Real-time 1:1 and group messaging
- Message delivery acknowledgments
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
| Caching   | Redis (for sessions, pub/sub)                            |
| Auth      | NextAuth.js and JWT                                      |
| Dev Tools | Docker, ESLint, Prettier                                 |

---

## Setup Instructions

### Manual Setup (Local Machine)

    Prerequisites:
        Node.js 21+
        PostgreSQL
        Redis
        npm
        prisma CLI (globally or via npx)

1. Clone the repo

```bash
git clone https://github.com/your-username/chat-rooms.git
cd chat-rooms
```

2. Configure Environment

Create .env files in both frontend and server (use variable names from .env.example)

3. Install dependencies

```bash
cd frontend
npm install

cd ../server
npm install
```

4. Setup Database

```bash
cd server
npx prisma generate
npx prisma migrate dev --name init
```

5. Setup Postgresql

Either use local setup or you can use a supabase or firebase instance.

6. Setup Redis

Make sure docker is installed in your system. Pull redis-stack image from dockerhub

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -e redis/redis-stack:latest
```

### Docker Setup

1. Clone the repo

```bash
git clone https://github.com/your-username/chat-rooms.git
cd chat-rooms
```

2. Setup .env files (same as manual setup)

3. Start with Docker Compose

```bash
docker-compose up --build
```
