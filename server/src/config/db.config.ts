import { PrismaClient } from "@prisma/client/default.js";

const prisma = new PrismaClient({
  log: ["error", "query"],
});
export default prisma;
